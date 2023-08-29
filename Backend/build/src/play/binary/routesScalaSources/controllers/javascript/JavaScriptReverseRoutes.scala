// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/varshareddy/Desktop/2022Report-incidents/Backend/conf/routes
// @DATE:Sat Jun 04 13:11:56 IST 2022

import play.api.routing.JavaScriptReverseRoute


import _root_.controllers.Assets.Asset

// @LINE:6
package controllers.javascript {

  // @LINE:6
  class Reverseic(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:10
    def deleteIncident: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.deleteIncident",
      """
        function(incidentId0) {
          return _wA({method:"DELETE", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/" + encodeURIComponent((""" + implicitly[play.api.mvc.PathBindable[Integer]].javascriptUnbind + """)("incidentId", incidentId0))})
        }
      """
    )
  
    // @LINE:9
    def listallIncidents: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.listallIncidents",
      """
        function() {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "findall"})
        }
      """
    )
  
    // @LINE:13
    def findByTime: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.findByTime",
      """
        function(incidentType0) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/findbyt/" + encodeURIComponent((""" + implicitly[play.api.mvc.PathBindable[String]].javascriptUnbind + """)("incidentType", incidentType0))})
        }
      """
    )
  
    // @LINE:8
    def listIncidents: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.listIncidents",
      """
        function(deviceId0) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/list/" + encodeURIComponent((""" + implicitly[play.api.mvc.PathBindable[Integer]].javascriptUnbind + """)("deviceId", deviceId0))})
        }
      """
    )
  
    // @LINE:6
    def addIncident: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.addIncident",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents"})
        }
      """
    )
  
    // @LINE:15
    def updateIncident: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.updateIncident",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/update"})
        }
      """
    )
  
    // @LINE:12
    def findByLoc: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.findByLoc",
      """
        function(location0) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/findbyl/" + encodeURIComponent((""" + implicitly[play.api.mvc.PathBindable[String]].javascriptUnbind + """)("location", location0))})
        }
      """
    )
  
    // @LINE:7
    def getIncident: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.getIncident",
      """
        function(incidentId0) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/" + encodeURIComponent((""" + implicitly[play.api.mvc.PathBindable[Integer]].javascriptUnbind + """)("incidentId", incidentId0))})
        }
      """
    )
  
    // @LINE:16
    def voteIncident: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.ic.voteIncident",
      """
        function() {
          return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "incidents/vote"})
        }
      """
    )
  
  }

  // @LINE:18
  class ReverseAssets(_prefix: => String) {

    def _defaultPrefix: String = {
      if (_prefix.endsWith("/")) "" else "/"
    }

  
    // @LINE:18
    def at: JavaScriptReverseRoute = JavaScriptReverseRoute(
      "controllers.Assets.at",
      """
        function(file1) {
          return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[play.api.mvc.PathBindable[String]].javascriptUnbind + """)("file", file1)})
        }
      """
    )
  
  }


}
