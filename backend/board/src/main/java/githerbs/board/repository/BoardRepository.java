package githerbs.board.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import githerbs.board.entity.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board,Integer> {

	List<Board> findAllByFlagFalse();
	Optional<Board> findByBoardIdAndFlagFalse(int boardId);

}
