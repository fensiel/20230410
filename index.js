function solution(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) { // 짝수일 경우에만 더함
      sum += i;
    }
    return sum;
  }
console.log(solution(9));

//   for (초기식; 조건식; 증감식) {
//     // 실행할 코드
//   }

// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
// 0<n<=1000

function solution(angle) {
    if (angle > 0 && angle < 90) { // 예각
      return 1;
    } else if (angle === 90) { // 직각
      return 2;
    } else if (angle > 90 && angle < 180) { // 둔각
      return 3;
    } else if (angle === 180) { // 평각
      return 4;
    }
  }

  //각에서 0도 초과 90도 미만은 예각, 90도는 직각,
//    90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다.
//     각 angle이 매개변수로 주어질 때 예각일 때 
//     1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 
//     solution 함수를 완성해주세요.
// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180

function solution(n,k) {
  
    const yan =12000;
    const drink = 2000;
    const totalprice = (n*yan)+(k-Math.floor(n/10))*drink;
    return totalprice;
}

// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
// 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
// 정수 n과 k가 매개변수로 주어졌을 때,
//  양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록
//   solution 함수를 완성해보세요.

// 제한사항

// 0 < n < 1,000
// n / 10 ≤ k < 1,000
// 서비스로 받은 음료수는 모두 마십니다.