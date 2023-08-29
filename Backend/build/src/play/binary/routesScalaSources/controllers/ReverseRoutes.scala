// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/varshareddy/Desktop/2022Report-incidents/Backend/conf/routes
// @DATE:Sat Jun 04 13:11:56 IST 2022

import play.api.mvc.Call


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers {

  // @LINE:6
  class Reverseic(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:10
    def deleteIncident(incidentId:Integer): Call = {
      
      Call("DELETE", _prefix + { _defaultPrefix } + "incidents/" + play.core.routing.dynamicString(implicitly[play.api.mvc.PathBindable[Integer]].unbind("incidentId", incidentId)))
    }
  
    // @LINE:9
    def listallIncidents(): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "findall")
    }
  
    // @LINE:13
    def findByTime(incidentType:String): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "incidents/findbyt/" + play.core.routing.dynamicString(implicitly[play.api.mvc.PathBindable[String]].unbind("incidentType", incidentType)))
    }
  
    // @LINE:8
    def listIncidents(deviceId:Integer): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "incidents/list/" + play.core.routing.dynamicString(implicitly[play.api.mvc.PathBindable[Integer]].unbind("deviceId", deviceId)))
    }
  
    // @LINE:6
    def addIncident(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "incidents")
    }
  
    // @LINE:15
    def updateIncident(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "incidents/update")
    }
  
    // @LINE:12
    def findByLoc(location:String): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "incidents/findbyl/" + play.core.routing.dynamicString(implicitly[play.api.mvc.PathBindable[String]].unbind("location", location)))
    }
  
    // @LINE:7
    def getIncident(incidentId:Integer): Call = {
      
      Call("GET", _prefix + { _defaultPrefix } + "incidents/" + play.core.routing.dynamicString(implicitly[play.api.mvc.PathBindable[Integer]].unbind("incidentId", incidentId)))
    }
  
    // @LINE:16
    def voteIncident(): Call = {
      
      Call("POST", _prefix + { _defaultPrefix } + "incidents/vote")
    }
  
  }

  // @LINE:18
  class ReverseAssets(_prefix: => String) {
    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:18
    def at(file:String): Call = {
      implicit lazy val _rrc = new play.core.routing.ReverseRouteContext(Map(("path", "/public"))); _rrc
      Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[play.api.mvc.PathBindable[String]].unbind("file", file))
    }
  
  }


}
