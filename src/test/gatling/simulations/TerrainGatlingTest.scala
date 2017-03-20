import _root_.io.gatling.core.scenario.Simulation
import ch.qos.logback.classic.{Level, LoggerContext}
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory

import scala.concurrent.duration._

/**
 * Performance test for the Terrain entity.
 */
class TerrainGatlingTest extends Simulation {

    val context: LoggerContext = LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]
    // Log all HTTP requests
    //context.getLogger("io.gatling.http").setLevel(Level.valueOf("TRACE"))
    // Log failed HTTP requests
    //context.getLogger("io.gatling.http").setLevel(Level.valueOf("DEBUG"))

    val baseURL = Option(System.getProperty("baseURL")) getOrElse """http://127.0.0.1:8080"""

    val httpConf = http
        .baseURL(baseURL)
        .inferHtmlResources()
        .acceptHeader("*/*")
        .acceptEncodingHeader("gzip, deflate")
        .acceptLanguageHeader("fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3")
<<<<<<< HEAD
        .connection("keep-alive")
=======
        .connectionHeader("keep-alive")
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:33.0) Gecko/20100101 Firefox/33.0")

    val headers_http = Map(
        "Accept" -> """application/json"""
    )

    val headers_http_authenticated = Map(
        "Accept" -> """application/json""",
<<<<<<< HEAD
        "X-CSRF-TOKEN" -> "${csrf_token}"
=======
        "X-XSRF-TOKEN" -> "${xsrf_token}"
>>>>>>> 533092147c410637b99bf57166ee237aec486555
    )

    val scn = scenario("Test the Terrain entity")
        .exec(http("First unauthenticated request")
        .get("/api/account")
        .headers(headers_http)
        .check(status.is(401))
<<<<<<< HEAD
        .check(headerRegex("Set-Cookie", "CSRF-TOKEN=(.*); [P,p]ath=/").saveAs("csrf_token")))
=======
        .check(headerRegex("Set-Cookie", "XSRF-TOKEN=(.*);[\\s]").saveAs("xsrf_token"))).exitHereIfFailed
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        .pause(10)
        .exec(http("Authentication")
        .post("/api/authentication")
        .headers(headers_http_authenticated)
        .formParam("j_username", "admin")
        .formParam("j_password", "admin")
        .formParam("remember-me", "true")
<<<<<<< HEAD
        .formParam("submit", "Login"))
=======
        .formParam("submit", "Login")
        .check(headerRegex("Set-Cookie", "XSRF-TOKEN=(.*);[\\s]").saveAs("xsrf_token"))).exitHereIfFailed
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        .pause(1)
        .exec(http("Authenticated request")
        .get("/api/account")
        .headers(headers_http_authenticated)
<<<<<<< HEAD
        .check(status.is(200))
        .check(headerRegex("Set-Cookie", "CSRF-TOKEN=(.*); [P,p]ath=/").saveAs("csrf_token")))
=======
        .check(status.is(200)))
>>>>>>> 533092147c410637b99bf57166ee237aec486555
        .pause(10)
        .repeat(2) {
            exec(http("Get all terrains")
            .get("/api/terrains")
            .headers(headers_http_authenticated)
            .check(status.is(200)))
            .pause(10 seconds, 20 seconds)
            .exec(http("Create new terrain")
            .post("/api/terrains")
            .headers(headers_http_authenticated)
            .body(StringBody("""{"id":null, "nom":"SAMPLE_TEXT", "description":"SAMPLE_TEXT", "prodeau":"0", "prodnour":"0"}""")).asJSON
            .check(status.is(201))
<<<<<<< HEAD
            .check(headerRegex("Location", "(.*)").saveAs("new_terrain_url")))
=======
            .check(headerRegex("Location", "(.*)").saveAs("new_terrain_url"))).exitHereIfFailed
>>>>>>> 533092147c410637b99bf57166ee237aec486555
            .pause(10)
            .repeat(5) {
                exec(http("Get created terrain")
                .get("${new_terrain_url}")
                .headers(headers_http_authenticated))
                .pause(10)
            }
            .exec(http("Delete created terrain")
            .delete("${new_terrain_url}")
            .headers(headers_http_authenticated))
            .pause(10)
        }

    val users = scenario("Users").exec(scn)

    setUp(
        users.inject(rampUsers(100) over (1 minutes))
    ).protocols(httpConf)
}
