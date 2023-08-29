// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/varshareddy/Desktop/2022Report-incidents/Backend/conf/routes
// @DATE:Sat Jun 04 13:11:56 IST 2022

package router

import play.core.routing._
import play.core.routing.HandlerInvokerFactory._

import play.api.mvc._

import _root_.controllers.Assets.Asset

class Routes(
  override val errorHandler: play.api.http.HttpErrorHandler, 
  // @LINE:6
  ic_0: controllers.ic,
  // @LINE:18
  Assets_1: controllers.Assets,
  val prefix: String
) extends GeneratedRouter {

   @javax.inject.Inject()
   def this(errorHandler: play.api.http.HttpErrorHandler,
    // @LINE:6
    ic_0: controllers.ic,
    // @LINE:18
    Assets_1: controllers.Assets
  ) = this(errorHandler, ic_0, Assets_1, "/")

  def withPrefix(prefix: String): Routes = {
    router.RoutesPrefix.setPrefix(prefix)
    new Routes(errorHandler, ic_0, Assets_1, prefix)
  }

  private[this] val defaultPrefix: String = {
    if (this.prefix.endsWith("/")) "" else "/"
  }

  def documentation = List(
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents""", """controllers.ic.addIncident()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/""" + "$" + """incidentId<[^/]+>""", """controllers.ic.getIncident(incidentId:Integer)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/list/""" + "$" + """deviceId<[^/]+>""", """controllers.ic.listIncidents(deviceId:Integer)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """findall""", """controllers.ic.listallIncidents()"""),
    ("""DELETE""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/""" + "$" + """incidentId<[^/]+>""", """controllers.ic.deleteIncident(incidentId:Integer)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/findbyl/""" + "$" + """location<[^/]+>""", """controllers.ic.findByLoc(location:String)"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/findbyt/""" + "$" + """incidentType<[^/]+>""", """controllers.ic.findByTime(incidentType:String)"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/update""", """controllers.ic.updateIncident()"""),
    ("""POST""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """incidents/vote""", """controllers.ic.voteIncident()"""),
    ("""GET""", this.prefix + (if(this.prefix.endsWith("/")) "" else "/") + """assets/""" + "$" + """file<.+>""", """controllers.Assets.at(path:String = "/public", file:String)"""),
    Nil
  ).foldLeft(List.empty[(String,String,String)]) { (s,e) => e.asInstanceOf[Any] match {
    case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
    case l => s ++ l.asInstanceOf[List[(String,String,String)]]
  }}


  // @LINE:6
  private[this] lazy val controllers_ic_addIncident0_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents")))
  )
  private[this] lazy val controllers_ic_addIncident0_invoker = createInvoker(
    ic_0.addIncident(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "addIncident",
      Nil,
      "POST",
      this.prefix + """incidents""",
      """ Home page""",
      Seq()
    )
  )

  // @LINE:7
  private[this] lazy val controllers_ic_getIncident1_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/"), DynamicPart("incidentId", """[^/]+""",true)))
  )
  private[this] lazy val controllers_ic_getIncident1_invoker = createInvoker(
    ic_0.getIncident(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "getIncident",
      Seq(classOf[Integer]),
      "GET",
      this.prefix + """incidents/""" + "$" + """incidentId<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:8
  private[this] lazy val controllers_ic_listIncidents2_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/list/"), DynamicPart("deviceId", """[^/]+""",true)))
  )
  private[this] lazy val controllers_ic_listIncidents2_invoker = createInvoker(
    ic_0.listIncidents(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "listIncidents",
      Seq(classOf[Integer]),
      "GET",
      this.prefix + """incidents/list/""" + "$" + """deviceId<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:9
  private[this] lazy val controllers_ic_listallIncidents3_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("findall")))
  )
  private[this] lazy val controllers_ic_listallIncidents3_invoker = createInvoker(
    ic_0.listallIncidents(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "listallIncidents",
      Nil,
      "GET",
      this.prefix + """findall""",
      """""",
      Seq()
    )
  )

  // @LINE:10
  private[this] lazy val controllers_ic_deleteIncident4_route = Route("DELETE",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/"), DynamicPart("incidentId", """[^/]+""",true)))
  )
  private[this] lazy val controllers_ic_deleteIncident4_invoker = createInvoker(
    ic_0.deleteIncident(fakeValue[Integer]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "deleteIncident",
      Seq(classOf[Integer]),
      "DELETE",
      this.prefix + """incidents/""" + "$" + """incidentId<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:12
  private[this] lazy val controllers_ic_findByLoc5_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/findbyl/"), DynamicPart("location", """[^/]+""",true)))
  )
  private[this] lazy val controllers_ic_findByLoc5_invoker = createInvoker(
    ic_0.findByLoc(fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "findByLoc",
      Seq(classOf[String]),
      "GET",
      this.prefix + """incidents/findbyl/""" + "$" + """location<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:13
  private[this] lazy val controllers_ic_findByTime6_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/findbyt/"), DynamicPart("incidentType", """[^/]+""",true)))
  )
  private[this] lazy val controllers_ic_findByTime6_invoker = createInvoker(
    ic_0.findByTime(fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "findByTime",
      Seq(classOf[String]),
      "GET",
      this.prefix + """incidents/findbyt/""" + "$" + """incidentType<[^/]+>""",
      """""",
      Seq()
    )
  )

  // @LINE:15
  private[this] lazy val controllers_ic_updateIncident7_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/update")))
  )
  private[this] lazy val controllers_ic_updateIncident7_invoker = createInvoker(
    ic_0.updateIncident(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "updateIncident",
      Nil,
      "POST",
      this.prefix + """incidents/update""",
      """""",
      Seq()
    )
  )

  // @LINE:16
  private[this] lazy val controllers_ic_voteIncident8_route = Route("POST",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("incidents/vote")))
  )
  private[this] lazy val controllers_ic_voteIncident8_invoker = createInvoker(
    ic_0.voteIncident(),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.ic",
      "voteIncident",
      Nil,
      "POST",
      this.prefix + """incidents/vote""",
      """""",
      Seq()
    )
  )

  // @LINE:18
  private[this] lazy val controllers_Assets_at9_route = Route("GET",
    PathPattern(List(StaticPart(this.prefix), StaticPart(this.defaultPrefix), StaticPart("assets/"), DynamicPart("file", """.+""",false)))
  )
  private[this] lazy val controllers_Assets_at9_invoker = createInvoker(
    Assets_1.at(fakeValue[String], fakeValue[String]),
    play.api.routing.HandlerDef(this.getClass.getClassLoader,
      "router",
      "controllers.Assets",
      "at",
      Seq(classOf[String], classOf[String]),
      "GET",
      this.prefix + """assets/""" + "$" + """file<.+>""",
      """ Map static resources from the /public folder to the /assets URL path""",
      Seq()
    )
  )


  def routes: PartialFunction[RequestHeader, Handler] = {
  
    // @LINE:6
    case controllers_ic_addIncident0_route(params@_) =>
      call { 
        controllers_ic_addIncident0_invoker.call(ic_0.addIncident())
      }
  
    // @LINE:7
    case controllers_ic_getIncident1_route(params@_) =>
      call(params.fromPath[Integer]("incidentId", None)) { (incidentId) =>
        controllers_ic_getIncident1_invoker.call(ic_0.getIncident(incidentId))
      }
  
    // @LINE:8
    case controllers_ic_listIncidents2_route(params@_) =>
      call(params.fromPath[Integer]("deviceId", None)) { (deviceId) =>
        controllers_ic_listIncidents2_invoker.call(ic_0.listIncidents(deviceId))
      }
  
    // @LINE:9
    case controllers_ic_listallIncidents3_route(params@_) =>
      call { 
        controllers_ic_listallIncidents3_invoker.call(ic_0.listallIncidents())
      }
  
    // @LINE:10
    case controllers_ic_deleteIncident4_route(params@_) =>
      call(params.fromPath[Integer]("incidentId", None)) { (incidentId) =>
        controllers_ic_deleteIncident4_invoker.call(ic_0.deleteIncident(incidentId))
      }
  
    // @LINE:12
    case controllers_ic_findByLoc5_route(params@_) =>
      call(params.fromPath[String]("location", None)) { (location) =>
        controllers_ic_findByLoc5_invoker.call(ic_0.findByLoc(location))
      }
  
    // @LINE:13
    case controllers_ic_findByTime6_route(params@_) =>
      call(params.fromPath[String]("incidentType", None)) { (incidentType) =>
        controllers_ic_findByTime6_invoker.call(ic_0.findByTime(incidentType))
      }
  
    // @LINE:15
    case controllers_ic_updateIncident7_route(params@_) =>
      call { 
        controllers_ic_updateIncident7_invoker.call(ic_0.updateIncident())
      }
  
    // @LINE:16
    case controllers_ic_voteIncident8_route(params@_) =>
      call { 
        controllers_ic_voteIncident8_invoker.call(ic_0.voteIncident())
      }
  
    // @LINE:18
    case controllers_Assets_at9_route(params@_) =>
      call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        controllers_Assets_at9_invoker.call(Assets_1.at(path, file))
      }
  }
}
