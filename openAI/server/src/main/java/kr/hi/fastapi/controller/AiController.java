package kr.hi.fastapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import kr.hi.fastapi.service.AiService;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AiController {
    
    @Autowired
    private AiService aiService;
    
    @GetMapping("/ask")
    public Map<String, String> ask(@RequestParam(name = "prompt") String prompt) {  // name 추가
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
}
