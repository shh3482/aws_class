// 스테이터스
let player = {
  hp: 100,
  maxHp: 100,
  tempAtk: 0,
  block: false,
  powerUp: false,
};
let enemy = {
  hp: 100,
  maxHp: 100,
  atk: 10,
};

let stage = 1;
let gameOver = false;
let energy = 10;
let handCards = [];

const playerHpEl = document.getElementById("playerHp");
const enemyHpEl = document.getElementById("enemyHp");
const logEl = document.getElementById("battleLog");

// 이미지 끌림 방지
document.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

// 초기 설정
player.hp = player.maxHp;
enemy.hp = enemy.maxHp;
player.block = false;
player.evade = false;
player.powerUp = false;
player.tempAtk = 0;

function showMessage(text) {
  logEl.innerText = text;
}

// 상태 출력
function renderStatus() {
  document.getElementById("playerHpText").innerText =
    `${player.hp} / ${player.maxHp}`;
  document.getElementById("enemyHpText").innerText =
    `${enemy.hp} / ${enemy.maxHp}`;

  playerHpEl.style.width = `${(player.hp / player.maxHp) * 100}%`;
  enemyHpEl.style.width = `${(enemy.hp / enemy.maxHp) * 100}%`;
}

// 피해 주기
function dealDamage(target, amount) {
  target.hp = Math.max(0, target.hp - amount);
}

// 체력 회복
function heal(target, amount) {
  target.hp = Math.min(target.maxHp, target.hp + amount);
}

// 적의 공격
function enemyAttack() {
  let damage = enemy.atk;

  if (player.block) {
    damage = Math.floor(damage * 0.5);
    player.block = false;
  }

  dealDamage(player, damage);
  shake("playerImg", 1);
  hitEffect("playerImg");
}

// 카드 피해주기
function dealCardDamage(target, baseDamage, options = {}) {
  let damage = baseDamage;

  if (player.powerUp) {
    damage = Math.floor(damage * 1.5);
    player.powerUp = false;
  }

  damage += player.tempAtk;

  if (options.selfDamage) {
    dealDamage(player, options.selfDamage);
  }

  dealDamage(target, damage);
  shake("enemyImg", -1);
  hitEffect("enemyImg");
  renderStatus();
}

// 턴 종료
function endTurn() {
  if (enemy.hp <= 0) {
    showMessage("승리!");
    return;
  }

  setTimeout(() => {
    enemyAttack();
    renderStatus();
    checkGameOver();
  }, 600);
}

// 게임 패배 조건 체크
function checkGameOver() {
  if (player.hp <= 0) {
    gameOver = true;
    showMessage("패배했습니다...");
    disableButtons();
    return;
  }

  if (enemy.hp <= 0) {
    showMessage("승리!");
    nextStage();
  }
}

// 버튼 잠그기
function disableButtons() {
  document.getElementById("attackBtn").disabled = true;
}

function enableButtons() {
  document.getElementById("attackBtn").disabled = false;
}

// 메세지 출력
function showMessage(text) {
  document.getElementById("battleLog").innerText = text;
}

// 흔들림 연출
function shake(id, dir = 1) {
  const el = document.getElementById(id);
  if (!el) return;

  el.style.transform = `translateX(${dir * -10}px)`;

  setTimeout(() => {
    el.style.transform = `translateX(${dir * 5}px)`;
  }, 100);

  setTimeout(() => {
    el.style.transform = "translateX(0)";
  }, 200);
}

// 피격시 색변화
function hitEffect(id) {
  const el = document.getElementById(id);

  el.classList.remove("hit");

  // 강제로 다시 인식시키기
  void el.offsetWidth;

  el.classList.add("hit");

  // 애니메이션 끝나면 제거
  el.addEventListener(
    "animationend",
    () => {
      el.classList.remove("hit");
    },
    { once: true }
  );
}

// 카드 데이터
/*
  일반 카드 목록 (총 25종)

  =========================
  공격 카드 ()
  =========================
  이름: 검격
  비용: 1
  효과: 적에게 피해를 5 줍니다.

  이름: 치명적인 일격
  비용: 2
  효과: 적에게 피해를 10 주며, 2턴간 [취약]을 부여합니다.
  (취약: 모든 공격으로 부터 받는 피해가 1 증가합니다.)

  이름: 연속 베기
  비용: 1
  효과: 적에게 피해를 3만큼 3회 줍니다.

  이름: 섬멸
  비용: 1
  효과: 적 전체에게 피해를 7 줍니다.

  이름: 강탈
  비용: 1
  효과: 적에게 피해를 8 주며, 카드를 1장 드로우 합니다.

  이름: 마력탄
  비용: 1
  효과: 적에게 피해를 4 주며, 적이 [실드]를 보유시 8의 피해를 줍니다.

  =========================
  방어 카드 ()
  =========================
  이름: 막기
  비용: 1
  효과: [실드]를 5 획득합니다.

  =========================
  유틸 카드 ()
  =========================
  이름: 마나 충전
  비용: 0
  효과: 마나를 1 획득합니다.
  (사용 후 소멸됩니다.)

  =========================
  버프 카드 ()
  =========================
  이름: 예리한 칼날
  비용: 0
  효과: 1턴간 모든 공격카드의 피해량이 1 증가합니다.
  (사용 후 소멸됩니다.)

  이름: 절대방어
  비용: 0
  효과: 1턴간 받는 피해를 모두 무효시킵니다.
  (사용 후 소멸됩니다.)

*/

const cardPool = [
  // =========================
  // 공격 카드 (10)
  // =========================
  {
    name: "기본 공격",
    type: "attack",
    cost: 1,
    damage: 6,
    desc: "적에게 6 피해",
    effect: () => dealCardDamage(enemy, 6),
  },

  // =========================
  // 방어 카드 (5)
  // =========================
  
  // =========================
  // 유틸 카드 (5)
  // =========================

  // =========================
  // 버프 카드 (5)
  // =========================
  
];

// 카드 생성
function createCards(count = 5) {
  const hand = document.getElementById("cardHand");
  hand.innerHTML = "";
  handCards = [];

  for (let i = 0; i < count; i++) {
    const data = cardPool[Math.floor(Math.random() * cardPool.length)];

    const card = document.createElement("div");
    card.className = "card";

    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.textContent = `${data.name} (${data.cost})`;

    card.appendChild(visual);
    card.onclick = () => {
      useCard(card, data);
    };

    hand.appendChild(card);
    handCards.push(card);
  }

  arrangeCards(handCards);
}

function drawCards(count = 1) {
  const hand = document.getElementById("cardHand");
  for (let i = 0; i < count; i++) {
    const data = cardPool[Math.floor(Math.random() * cardPool.length)];
    const card = document.createElement("div");
    card.className = "card";
    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.innerText = `${data.name} (${data.cost})`;
    card.appendChild(visual);

    card.onclick = () => {
      if (energy < data.cost || gameOver) return;
      energy -= data.cost;
      data.effect();
      card.remove();
      renderStatus();
    };

    hand.appendChild(card);
  }
}

function useCard(cardEl, cardData) {
  if (energy < cardData.cost) {
    showMessage("에너지 부족!");
    return;
  }

  energy -= cardData.cost;
  cardData.effect();
  renderStatus();

  cardEl.classList.add("cast");

  setTimeout(() => {
    cardEl.remove();
    handCards = handCards.filter(c => c !== cardEl);
    arrangeCards(handCards);
  }, 500);
}

// 카드 정렬
function arrangeCards(cards) {
  const total = cards.length;
  const spread = 5;

  cards.forEach((card, index) => {
    const offset = index - (total - 1) / 2;
    const angle = offset * spread;

    card.style.setProperty("--x", `${offset * 110}px`);
    card.style.setProperty("--y", `${Math.pow(Math.abs(offset), 1.6) * 12}px`);
    card.style.setProperty("--r", `${angle}deg`);
  });
}

// ===== 시작 =====
renderStatus();
createCards(7);
