package com.githerbs.auth.domain.auth.dto.response;

import com.githerbs.auth.domain.auth.dto.common.JwtScopeDto;
import com.githerbs.auth.domain.auth.dto.common.MemberInfoDto;
import com.google.gson.annotations.SerializedName;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@EqualsAndHashCode(callSuper = true)
@Data
@SuperBuilder
@NoArgsConstructor
// @AllArgsConstructor
@Schema(name = "JwtExtrationResponseDto", description = "JWT 정보추출 응답 클래스")
public class JwtExtrationResponseDto extends MemberInfoDto {
}
