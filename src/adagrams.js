const Adagrams = {
  drawLetters() {
    let letterPool = [
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "A",
      "B",
      "B",
      "C",
      "C",
      "D",
      "D",
      "D",
      "D",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "E",
      "F",
      "F",
      "G",
      "G",
      "G",
      "H",
      "H",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "I",
      "J",
      "K",
      "L",
      "L",
      "L",
      "L",
      "M",
      "M",
      "N",
      "N",
      "N",
      "N",
      "N",
      "N",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "O",
      "P",
      "P",
      "Q",
      "R",
      "R",
      "R",
      "R",
      "R",
      "R",
      "S",
      "S",
      "S",
      "S",
      "T",
      "T",
      "T",
      "T",
      "T",
      "T",
      "U",
      "U",
      "U",
      "U",
      "V",
      "V",
      "W",
      "W",
      "X",
      "Y",
      "Y",
      "Z"
    ];
    //   SCORE_CHART: {
    //     A: 1,
    //     E: 1,
    //     I: 1,
    //     O: 1,
    //     U: 1,
    //     L: 1,
    //     N: 1,
    //     R: 1,
    //     S: 1,
    //     T: 1,
    //     D: 2,
    //     G: 2,
    //     B: 3,
    //     C: 3,
    //     M: 3,
    //     P: 3,
    //     F: 4,
    //     H: 4,
    //     V: 4,
    //     W: 4,
    //     Y: 4,
    //     K: 5,
    //     J: 8,
    //     X: 8,
    //     Q: 10,
    //     Z: 10,
    //
    //     LENGTH_BONUS: 8
    //   };

    const hand = [];
    let tilesDrawn = 0;

    while (tilesDrawn < 10) {
      let rand = letterPool[Math.floor(Math.random() * letterPool.length)];
      hand.push(rand);
      tilesDrawn++;
    }
    return hand;
  },
  //   usesAvailableLetters(word, drawnLetters) {
  //     const letters = word.split("");
  //     const drawnCopy = drawnLetters.slice(0); // Create a copy of the drawn letters which we can modify
  //
  //     return letters.every(letter => {
  //       const index = drawnCopy.indexOf(letter);
  //       if (index === -1) return false;
  //
  //       delete drawnCopy[index];
  //       return true;
  //     });
  //   }
  // };
  usesAvailableLetters(input, hand) {
    const availableLetters = input.split("");
    const handCopy = hand.slice(0);

    return availableLetters.every(letter => {
      const index = handCopy.indexOf(letter);
      if (index === -1) return false;

      delete handCopy[index];
      return true;
    });
  },
  SCORE_CHART: {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
  },

  LENGTH_BONUS: 8,
  scoreWord(word) {
    return word
      .toUpperCase()
      .split("")
      .reduce((wordScore, letter) => {
        const letterScore = Adagrams.SCORE_CHART[letter];
        if (letterScore === undefined) {
          throw `${letter} is not in the English alphabet!`;
        }

        return wordScore + letterScore;
      }, word.length < 7 ? 0 : Adagrams.LENGTH_BONUS);
  },
  //
  // def highest_score_from(words)
  //   best_word = {word: nil, score: 0}
  //   words.each do |word|
  //     if score_word(word) > best_word[:score]
  //       best_word[:score] = score_word(word)
  //       best_word[:word] = word
  //     elsif score_word(word) == best_word[:score]
  //       if word.length == 10 && best_word[:word].length != 10
  //         best_word[:word] = word
  //       elsif word.length < best_word[:word].length && best_word[:word].length != 10
  //         best_word[:word] = word
  //       end
  //     end
  //   end
  //   best_word
  // end

  highestScoreFrom(words) {
    const highWord = {
      word: null,
      score: 0
    };
    words.sort(function(a, b) {
      return a.length - b.length;
    });
    words.forEach(word => {
      let score = this.scoreWord(word);
      if (score > highWord.score) {
        highWord.score = score;
        highWord.word = word;
      } else if (
        score === highWord.score &&
        word.length === 10 &&
        highWord.word.length < 10
      ) {
        highWord.score = score;
        highWord.word = word;
      }
    });
    return highWord;
  }
};
// ***********************************
//   def score_word(word)
//   word_score = 0
//
//   word.split("").each do |letter|
//     letter = letter.upcase.to_sym
//     case letter
//     when :A, :E, :I, :O, :U, :L, :N, :R, :S, :T
//       word_score += 1
//     when :D, :G
//       word_score += 2
//     when :B, :C, :M, :P
//       word_score += 3
//     when :F, :H, :V, :W, :Y
//       word_score += 4
//     when :K
//       word_score += 5
//     when :J, :X
//       word_score += 8
//     when :Q, :Z
//       word_score += 10
//     end
//   end
//
//   word_score += 8 if (7..10).includes(word.length)
//
//   return word_score
// end
// *************************************
// switch (letters) {
//   case ("A", "E", "I", "O", "U", "L", "N", "R", "S", "T"):
//     wordScore += 1;
//     break;
//   case ("D", "G"):
//     wordScore += 2;
//     break;
//   case ("B", "C", "M", "P"):
//     wordScore += 3;
//     break;
//   case ("F", "H", "V", "W", "Y"):
//     wordScore += 4;
//     break;
//   case "K":
//     wordScore += 5;
//     break;
//   case ("J", "X"):
//     wordScore += 8;
//     break;
//   case ("Q", "Z"):
//     wordScore += 10;
//     break;
//   default:
//     console.log("That is not a letter.");
//     return wordScore
// word_score += 8 if(7..10).includes?(word.length);

export default Adagrams;
