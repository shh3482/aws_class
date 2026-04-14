package kr.hi.fastapi.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class AiService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String AI_SERVER_URL = "http://localhost:8000";
    private final ObjectMapper objectMapper = new ObjectMapper();
    
    public String askAi(String prompt) {
        try {
            String url = AI_SERVER_URL + "/ask?prompt=" + 
                        java.net.URLEncoder.encode(prompt, "UTF-8");
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            
            // JSON 응답 파싱
            JsonNode jsonNode = objectMapper.readTree(response.getBody());
            return jsonNode.get("answer").asText();
        } catch (Exception e) {
            e.printStackTrace();
            return "에러: " + e.getMessage();
        }
    }
    
    public String translate(String text, String style) {
        try {
            String url = AI_SERVER_URL + "/translate?text=" + 
                        java.net.URLEncoder.encode(text, "UTF-8") + 
                        "&style=" + style;
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            
            // JSON 응답 파싱
            JsonNode jsonNode = objectMapper.readTree(response.getBody());
            return jsonNode.get("translated").asText();
        } catch (Exception e) {
            e.printStackTrace();
            return "에러: " + e.getMessage();
        }
    }
}
