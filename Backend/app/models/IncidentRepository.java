package models;

import com.google.inject.ImplementedBy;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.concurrent.CompletionStage;
import java.util.stream.Stream;

@ImplementedBy(JPAIncidentRepository.class)
public interface IncidentRepository {


    CompletionStage<Inc> add(Inc incident);

    CompletionStage<Inc> get(Integer incidentId);

    CompletionStage<Stream<Inc>> list(Integer deviceId);

    CompletionStage<Stream<Inc>> listtall();

    CompletionStage<Inc> delete(Integer incidentId);

    CompletionStage<Stream<Inc>>find_l(String location);

    CompletionStage<Stream<Inc>>find_t (String incidentType);

    CompletionStage<Inc> update(JsonNode js);

    CompletionStage<Inc> vote(JsonNode js);

}