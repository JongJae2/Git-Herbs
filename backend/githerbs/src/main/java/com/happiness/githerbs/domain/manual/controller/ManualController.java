package com.happiness.githerbs.domain.manual.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.happiness.githerbs.domain.manual.dto.response.TipResponseDto;
import com.happiness.githerbs.domain.manual.service.ManualService;
import com.happiness.githerbs.global.common.response.SuccessResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/manual")
public class ManualController {

	private final ManualService manualService;

	@GetMapping("/tip")
	public ResponseEntity<SuccessResponse<TipResponseDto>> findTip() {
		return ResponseEntity.ok(new SuccessResponse<>(HttpStatus.OK, manualService.findTip()));
	}

}
