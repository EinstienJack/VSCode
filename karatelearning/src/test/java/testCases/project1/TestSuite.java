package testCases.project1;

import com.intuit.karate.junit5.Karate;

public class TestSuite {
    
    @Karate.Test
    Karate testSample() {
        return Karate.run("Automation").relativeTo(getClass());
    }
}
