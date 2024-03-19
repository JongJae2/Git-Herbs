package githerbs.board.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

@Data
@Builder
@AllArgsConstructor
@ToString
public class BoardRequestDto {
	String herbName;
	String imgUrl;
	double similar;
	int herbId;
	int memberId;
}

