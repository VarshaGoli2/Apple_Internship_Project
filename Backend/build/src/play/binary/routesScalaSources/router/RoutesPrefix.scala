// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/varshareddy/Desktop/2022Report-incidents/Backend/conf/routes
// @DATE:Sat Jun 04 13:11:56 IST 2022


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
