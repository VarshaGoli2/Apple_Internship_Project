package models;

import com.fasterxml.jackson.databind.JsonNode;
import play.db.jpa.JPAApi;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;
import java.util.concurrent.CompletionStage;
import java.util.function.Function;
import java.util.stream.Stream;

import static java.util.concurrent.CompletableFuture.supplyAsync;

/**
 * Provide JPA operations running inside of a thread pool sized to the connection pool
 */
public class JPAIncidentRepository implements IncidentRepository {

    private final JPAApi jpaApi;
    private final DatabaseExecutionContext executionContext;

    @Inject
    public JPAIncidentRepository(JPAApi jpaApi, DatabaseExecutionContext executionContext) {
        this.jpaApi = jpaApi;
        this.executionContext = executionContext;
    }


    @Override
    public CompletionStage<Inc> add(Inc incident) {
        return supplyAsync(() -> wrap(em -> insert(em, incident)), executionContext);
    }

    @Override
    public CompletionStage<Inc> get(Integer incidentId ) {
        return supplyAsync(() -> wrap(em -> find(em, incidentId)), executionContext);
    }

    @Override
    public CompletionStage<Inc> delete(Integer incidentId ) {
        return supplyAsync(() -> wrap(em -> remove(em, incidentId)), executionContext);
    }


    @Override
    public CompletionStage<Stream<Inc>> find_l(String location) {
        return supplyAsync(() -> wrap(em -> searchl(em, location)), executionContext);
    }


    @Override
    public CompletionStage<Stream<Inc>> find_t(String incidentType) {
        return supplyAsync(() -> wrap(em -> searcht(em, incidentType)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Inc>> list(Integer deviceId) {
        return supplyAsync(() -> wrap(em -> listall(em, deviceId)), executionContext);
    }

    @Override
    public CompletionStage<Stream<Inc>> listtall() {
        return supplyAsync(() -> wrap(em -> listsall(em)), executionContext);
    }

    @Override
    public CompletionStage<Inc> update(JsonNode js) {
        return supplyAsync(() -> wrap(em -> edit(em,js)), executionContext);
    }

    @Override
    public CompletionStage<Inc> vote(JsonNode js) {
        return supplyAsync(() -> wrap(em -> updatevote(em,js)), executionContext);
    }

    private <T> T wrap(Function<EntityManager, T> function) {
        return jpaApi.withTransaction(function);
    }

    private Inc insert(EntityManager em, Inc incident) {
        em.persist(incident);
        return incident;
    }

    private Inc find(EntityManager em,Integer incidentId) {
        Inc incident = em.createQuery("select i from Inc i where i.incidentId=:iid", Inc.class).setParameter("iid",incidentId).getSingleResult();
        return incident;
    }

    private Inc remove(EntityManager em,Integer incidentId) {
        Inc incident = em.createQuery("select i from Inc i where i.incidentId=:iid", Inc.class).setParameter("iid",incidentId).getSingleResult();
        em.remove(incident);
        return incident;
    }

    private Stream<Inc> searchl(EntityManager em,String location) {
        List<Inc> list = em.createQuery("select i from Inc i where i.location=:l", Inc.class).setParameter("l",location).getResultList();
        return list.stream();
    }

    private Stream<Inc> searcht(EntityManager em,String incidentType) {
        List<Inc> list1 = em.createQuery("select i from Inc i where i.incidentType=:type", Inc.class).setParameter("type",incidentType).getResultList();
        return list1.stream();
    }

    private Stream<Inc> listall(EntityManager em,Integer deviceId) {
        List<Inc> list2 = em.createQuery("select i from Inc i where i.deviceId=:did", Inc.class).setParameter("did",deviceId).getResultList();
        return list2.stream()
                \
    }

    private Stream<Inc> listsall(EntityManager em) {
        List<Inc> list3 = em.createQuery("select i from Inc i", Inc.class).getResultList();
        return list3.stream();
    }

    private Inc edit(EntityManager em,JsonNode js) {
        int id=js.get("incidentId").asInt();
        int a = em.createQuery("update Inc i set i.severityLevel=:sl,i.damages=:d,i.addInfo=:info where i.incidentId=:id")
                .setParameter("sl",js.get("severityLevel").asText())
                .setParameter("d",js.get("damages").asText())
                .setParameter("info",js.get("addInfo").asText())
                .setParameter("id",js.get("incidentId").asInt())
                .executeUpdate();
        if(a!=0) {
            Inc incident = em.createQuery("select i from Inc i where i.incidentId=:id", Inc.class).setParameter("id",id).getSingleResult();

            return (incident);
        }
        else
        {
            return null;
        }
    }

    private Inc updatevote(EntityManager em,JsonNode js) {
        int id=js.get("incidentId").asInt();
        int a =  em.createQuery("update Inc i set i.upvote=:up,i.downvote=:down,i.reportCount=:rc where i.incidentId=:id")
                .setParameter("up",js.get("upvote").asInt())
                .setParameter("down",js.get("downvote").asInt())
                .setParameter("rc",js.get("reportCount").asInt())
                .setParameter("id",js.get("incidentId").asInt())
                .executeUpdate();
        if(a!=0) {
            Inc incident = em.createQuery("select i from Inc i where i.incidentId=:id", Inc.class).setParameter("id",id).getSingleResult();

            return (incident);
        }
        else
        {
            return null;
        }

    }


}