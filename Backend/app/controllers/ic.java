package controllers;
import models.Inc;
import models.IncidentRepository;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import com.fasterxml.jackson.databind.JsonNode;
import javax.inject.Inject;
import java.util.concurrent.CompletionStage;
import static play.libs.Json.fromJson;

import java.util.stream.Collectors;

import static play.libs.Json.toJson;


public class ic extends Controller {

    private final FormFactory formFactory;
    private final IncidentRepository incidentRepository;
    private final HttpExecutionContext ec;

    @Inject
    public ic(FormFactory formFactory, IncidentRepository incidentRepository, HttpExecutionContext ec) {
        this.formFactory = formFactory;
        this.incidentRepository = incidentRepository;
        this.ec = ec;
    }

    public CompletionStage<Result> addIncident() {
        JsonNode js = request().body().asJson();
        Inc incident = fromJson(js, Inc.class);
        return incidentRepository.add(incident).thenApplyAsync(i-> {
            return ok(toJson(i));
        }, ec.current());

    }

    public CompletionStage<Result> getIncident(Integer incidentId) {
        return incidentRepository.get(incidentId).thenApplyAsync(i-> {
            return ok(toJson(i));
        }, ec.current());

    }

    public CompletionStage<Result> listIncidents(Integer deviceId) {
        return incidentRepository.list(deviceId).thenApplyAsync(i-> {
            return ok(toJson(i.collect(Collectors.toList())));
        }, ec.current());

    }
    public CompletionStage<Result> listallIncidents() {
        return incidentRepository.listtall().thenApplyAsync(i-> {
            return ok(toJson(i.collect(Collectors.toList())));
        }, ec.current());

    }

    public CompletionStage<Result> deleteIncident(Integer incidentId) {
        return incidentRepository.delete(incidentId).thenApplyAsync(i-> {
            return ok();
        }, ec.current());

    }

    public CompletionStage<Result> findByLoc(String location) {
        return incidentRepository.find_l(location).thenApplyAsync(i-> {
            return ok(toJson(i.collect(Collectors.toList())));
        }, ec.current());

    }


    public CompletionStage<Result> findByTime(String incidentType) {
        return incidentRepository.find_t(incidentType).thenApplyAsync(i-> {
            return ok(toJson(i.collect(Collectors.toList())));
        }, ec.current());

    }


    public CompletionStage<Result> updateIncident() {
        JsonNode js = request().body().asJson();
        return incidentRepository.update(js).thenApplyAsync(i-> {
            return ok(toJson(i));
        }, ec.current());

    }

    public CompletionStage<Result> voteIncident() {
        JsonNode js = request().body().asJson();
        return incidentRepository.vote(js).thenApplyAsync(i-> {
            return ok(toJson(i));
        }, ec.current());

    }


}