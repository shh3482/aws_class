package kr.hi.fastapi.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.HttpEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class AiService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String AI_SERVER_URL = "http://localhost:8000";
    private final ObjectMapper objectMapper = new ObjectMapper();
    
    // --- 기존 기능: 텍스트 질문 ---
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
    
    // --- 기존 기능: 번역 ---
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

    // --- 새로 추가된 기능: 이미지와 질문을 파이썬으로 전송 ---
    public String analyzeImage(MultipartFile file, String question) {
        try {
            // 파이썬 서버의 이미지 처리 주소
            String url = AI_SERVER_URL + "/vision"; 

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.MULTIPART_FORM_DATA);

            MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
            
            // 1. 이미지 파일을 파이썬이 읽을 수 있는 형태로 변환해서 담기
            body.add("file", new ByteArrayResource(file.getBytes()) {
                @Override
                public String getFilename() {
                    return file.getOriginalFilename();
                }
            });
            // 2. 질문 담기
            body.add("question", question);

            HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
            
            // 파이썬 서버로 POST 요청 전송
            ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);
            
            // 파이썬에서 온 JSON 응답 파싱
            JsonNode jsonNode = objectMapper.readTree(response.getBody());
            if(jsonNode.has("answer")) {
                return jsonNode.get("answer").asText();
            }
            return response.getBody(); // 만약 예상과 다른 형태면 통째로 반환

        } catch (Exception e) {
            e.printStackTrace();
            return "파이썬 서버 연결 에러: " + e.getMessage();
        }
    }
}