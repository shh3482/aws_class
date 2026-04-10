package kr.hi.fastapi.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.MultipartBodyBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
public class controller {
	
	private final WebClient webClient;
	
	@PostMapping("/image")
	public String text(@RequestParam("image")MultipartFile file) {
		MultipartBodyBuilder bodyBuilder = new MultipartBodyBuilder();
		bodyBuilder.part("msg", "데이터 갔나요?");
		bodyBuilder.part("file", file.getResource());
		return webClient.post().uri("/image")
				.contentType(MediaType.MULTIPART_FORM_DATA)
				.body(BodyInserters.fromMultipartData(bodyBuilder.build()))
				.retrieve()
				.bodyToMono(String.class)
				.block();
	}
	
	@PostMapping("/proxy/image")
	public ResponseEntity<?> proxyText(@RequestParam("msg")String msg){
		MultipartBodyBuilder bodyBuild = new MultipartBodyBuilder();
		bodyBuild.part("msg", msg);
		String result = webClient.post().uri("/text")
				// 첨부파일 일때 필요
				.contentType(MediaType.MULTIPART_FORM_DATA)
				// 위에서 바디빌더에 추가한 데이터를 묶어서 멀티파트데이터형식으로 변환
				// 해서 추가
				.body(BodyInserters.fromMultipartData(bodyBuild.build()))
				// 서버에 요청을 보내고 응답을 받음
				.retrieve()
				//받아온 데이터를 지정한 타입으로 변환
				.bodyToMono(String.class)
				// 응답이 올떄까지 기다림
				.block();
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/fashion/predict")
	public String fashionPredict(@RequestParam("image")MultipartFile file) {
	    MultipartBodyBuilder bodyBuilder = new MultipartBodyBuilder();
	    
	    bodyBuilder.part("file", file.getResource()); 

	    return webClient.post().uri("/fashion")
	            .contentType(MediaType.MULTIPART_FORM_DATA)
	            .body(BodyInserters.fromMultipartData(bodyBuilder.build()))
	            .retrieve()
	            .bodyToMono(String.class)
	            .block();
	}
	
	@PostMapping("/text")
	public String text(@RequestParam("msg")String msg) {
		MultipartBodyBuilder bodyBuilder = new MultipartBodyBuilder();
		bodyBuilder.part("msg", msg);
		return webClient.post().uri("/text")
				.contentType(MediaType.MULTIPART_FORM_DATA)
				.body(BodyInserters.fromMultipartData(bodyBuilder.build()))
				.retrieve()
				.bodyToMono(String.class)
				.block();
	}
	
	@GetMapping("/movies")
	public String movies() {
//		return "[{\"title\" : \"Avatar\"}]";
		return webClient.get().uri("/movies")
				.retrieve()
				.bodyToMono(String.class)
				.block();
	}
	
	@GetMapping("/movies/recommend")
	public String movieRecommend(
			@RequestParam("title")String title,
			@RequestParam("type")String type
			) {
		MultipartBodyBuilder bodyBuilder = new MultipartBodyBuilder();
		bodyBuilder.part("title", title);
		bodyBuilder.part("type", type);
		
		return webClient.post().uri("/movies/recommend")
				.contentType(MediaType.MULTIPART_FORM_DATA)
				.body(BodyInserters.fromMultipartData(bodyBuilder.build()))
				.retrieve()
				.bodyToMono(String.class)
				.block();

	}
}
