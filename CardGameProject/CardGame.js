
// 스테이터스
let player = { hp: 2, maxHp: 2, atk: 1 };
let enemy = { hp: 2, maxHp: 2, atk: 2 };
let stage = 1;
let energy = 1;

let handCards = [];

// 기타
let gameOver = false;

// 상태 출력
function renderStatus() {
  // 플레이어
  document.getElementById(
    "playerHpText"
  ).innerText = `${player.hp} / ${player.maxHp}`;
  document.getElementById("playerAtk").innerText = player.atk;

  const playerHpPercent = (player.hp / player.maxHp) * 100;
  document.getElementById("playerHp").style.width = `${playerHpPercent}%`;

  // 적
  document.getElementById(
    "enemyHpText"
  ).innerText = `${enemy.hp} / ${enemy.maxHp}`;
  document.getElementById("enemyAtk").innerText = enemy.atk;

  const enemyHpPercent = (enemy.hp / enemy.maxHp) * 100;
  document.getElementById("enemyHp").style.width = `${enemyHpPercent}%`;
}

// 카드 출력
function renderCards() {
  const div = document.getElementById("cards");
  div.innerHTML = "";

  cards.forEach((card, index) => {
    const btn = document.createElement("button");
    btn.innerText = `${card.name} (코스트 ${card.cost})`;
    btn.onclick = () => playCard(index);
    div.appendChild(btn);
  });
}

// 카드 사용
function playCard(index) {
  const card = cards[index];
  if (energy < card.cost) return alert("에너지 부족!");
  energy -= card.cost;
  card.use();
  renderStatus();
}

// 전투 로직
function battle() {
  if (gameOver) return;

  disableButtons();

  enemy.hp -= player.atk;
  renderStatus();
  showMessage("플레이어가 공격했다!");
  shake2("enemyImg");

  setTimeout(() => {
    if (enemy.hp > 0) {
      player.hp -= enemy.atk;
      renderStatus();
      showMessage("적이 반격했다!");
      shake("playerImg");
    }

    checkGameOver();

    setTimeout(() => {
      enableButtons();
      showMessage("다음 턴");
    }, 1000);
  }, 1000);
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
function shake(id) {
  const el = document.getElementById(id);
  el.style.transform = "translateX(-10px)";
    setTimeout(() => (el.style.transform = "translateX(+10px)"), 100);
    setTimeout(() => (el.style.transform = "translateX(0)"), 100);
}

function shake2(id) {
  const el = document.getElementById(id);
  el.style.transform = "translateX(+10px)";
    setTimeout(() => (el.style.transform = "translateX(-10px)"), 100);
    setTimeout(() => (el.style.transform = "translateX(0)"), 100);
}

// 버프 목록
function atkUp() {
  player.atk++;
  console.log("플레이어 공격력 증가:", player);
}

function hpUp() {
  player.hp++;
  console.log("플레이어 체력 증가:", player);
}

// 피격 이펙트
function hitEffect(id) {
  const el = document.getElementById(id);
  el.classList.add("hit");
  setTimeout(() => el.classList.remove("hit"), 200);
}

// 카드 데이터
const cardPool = [
  { name: "공격력 +1" },
  { name: "체력 +1" },
  { name: "공격력 +2" },
  { name: "체력 +2" },
];

// 카드 생성
function createCards(count = 0) {
  const hand = document.getElementById("cardHand");
  hand.innerHTML = "";
  handCards = [];

  for (let i = 0; i < count; i++) {
    const cardData = cardPool[Math.floor(Math.random() * cardPool.length)];

    const card = document.createElement("div");
    card.className = "card";

    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.textContent = cardData.name;

    card.appendChild(visual);

    card.onclick = () => useCard(card, cardData);

    hand.appendChild(card);
    handCards.push(card);
  }

  arrangeCards(handCards);
}

function useCard(card, cardData) {
  applyCardEffect(cardData.name);

  card.classList.add("cast");

  setTimeout(() => {
    card.remove();
    handCards = handCards.filter((c) => c !== card);
    arrangeCards(handCards);
  }, 500);
}

function applyCardEffect(name) {
  switch (name) {
    case "공격력 +1":
      player.atk += 1;
      break;
    case "체력 +1":
      player.maxHp += 1;
      player.hp += 1;
      break;
    case "공격력 +2":
      player.atk += 2;
      break;
    case "체력 +2":
      player.maxHp += 2;
      player.hp += 2;
      break;
  }

  renderStatus();
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

function getTargetPosition(isEnemy) {
  const targetImg = document.getElementById(isEnemy ? "enemyImg" : "playerImg");
  const rect = targetImg.getBoundingClientRect();

  // 컨테이너 기준으로 좌표 계산
  return {
    x: rect.left + rect.width / 2 - window.innerWidth / 2 + "px",
    y: rect.top - 100 + "px",
  };
}

// ===== 시작 =====
renderStatus();
createCards(7);
