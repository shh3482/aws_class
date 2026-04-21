package kr.hi.fastapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import kr.hi.fastapi.service.AiService;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class AiController {
    
    @Autowired
    private AiService aiService;
    
    // --- 1. 기존 기능: 질문 ---
    @GetMapping("/ask")
    public Map<String, String> ask(@RequestParam(name = "prompt") String prompt) {  
        Map<String, String> response = new HashMap<>();
        try {
            String answer = aiService.askAi(prompt);
            response.put("question", prompt);
            response.put("answer", answer);
            System.out.println("✓ Ask Request: " + prompt);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", e.getMessage());
        }
        return response;
    }
    
    // --- 2. 기존 기능: 번역 ---
    @GetMapping("/translate")
    public Map<String, String> translate(
            @RequestParam(name = "text") String text,
            @RequestParam(name = "style", defaultValue = "formal") String style) {
        Map<String, String> response = new HashMap<>();
        try {
            String translated = aiService.translate(text, style);
            response.put("original", text);
            response.put("translated", translated);
            System.out.println("✓ Translate Request: " + text);
        } catch (Exception e) {
            e.printStackTrace();
            response.put("error", e.getMessage());
        }
        return response;
    }

    // --- 3. 완성된 기능: 이미지 + 텍스트 받아서 파이썬으로 넘기기 ---
    @PostMapping("/upload")
    public Map<String, Object> upload(
            @RequestParam("file") MultipartFile file, 
            @RequestParam("question") String question) {
        
        Map<String, Object> response = new HashMap<>();
        try {
            System.out.println("✓ Upload Request - 받은 질문: " + question);
            System.out.println("✓ Upload Request - 받은 파일명: " + file.getOriginalFilename());
            
            // 파이썬 서버로 파일과 질문을 전송
            String aiAnswer = aiService.analyzeImage(file, question);
            
            System.out.println("✓ Upload Analyze - AI 답변: " + aiAnswer);
            
            // 파이썬에서 받은 AI의 답변을 리액트로 전달
            response.put("status", "success");
            response.put("message", "AI 분석 완료!");
            response.put("answer", aiAnswer); // 리액트 화면에 보여줄 실제 답변
            
        } catch (Exception e) {
            e.printStackTrace();
            response.put("status", "error");
            response.put("message", "서버 처리 중 에러 발생: " + e.getMessage());
        }
        return response;
    }
}