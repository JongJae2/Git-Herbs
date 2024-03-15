package com.githerbs.herb.global.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.githerbs.herb.global.common.exception.BaseException;
import com.githerbs.herb.global.common.response.ErrorResponse;

import lombok.RequiredArgsConstructor;

@RestControllerAdvice
@RequiredArgsConstructor
public class GlobalExceptionHandler {

	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<ErrorResponse> handleException(Exception exception) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
			.body(new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), exception.getMessage()));
	}

	@ExceptionHandler(value = BaseException.class)
	public ResponseEntity<ErrorResponse> handleBaseException(BaseException exception) {
		return ResponseEntity.status(exception.getStatus())
			.body(new ErrorResponse(exception.getStatus(), exception.getCode()));
	}

	// @MessageExceptionHandler(BaseException.class)
	// @SendToUser("/sub/errors")
	// public ErrorResponse handleMessageBaseException(BaseException e) {
	// 	return new ErrorResponse(e.getStatus(), e.getCode());
	// }
}