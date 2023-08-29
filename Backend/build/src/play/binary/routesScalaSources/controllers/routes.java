// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/varshareddy/Desktop/2022Report-incidents/Backend/conf/routes
// @DATE:Sat Jun 04 13:11:56 IST 2022

package controllers;

import router.RoutesPrefix;

public class routes {
  
  public static final controllers.Reverseic ic = new controllers.Reverseic(RoutesPrefix.byNamePrefix());
  public static final controllers.ReverseAssets Assets = new controllers.ReverseAssets(RoutesPrefix.byNamePrefix());

  public static class javascript {
    
    public static final controllers.javascript.Reverseic ic = new controllers.javascript.Reverseic(RoutesPrefix.byNamePrefix());
    public static final controllers.javascript.ReverseAssets Assets = new controllers.javascript.ReverseAssets(RoutesPrefix.byNamePrefix());
  }

}
