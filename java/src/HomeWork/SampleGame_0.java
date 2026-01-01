package HomeWork;

import java.awt.Color;
import java.util.*;

import Utility.ColorPool;

public class SampleGame_0 {

    static Scanner sc = new Scanner(System.in);

    static class Character {
        String name;
        String job;
        int maxHP;
        int hp;
        int codeLength;
        double critMultiplier;

        boolean firstAttack = true;
        boolean healOnTurnEnd = false;
        boolean damageReduce = false;
        double damageReduceRate = 1.0;
        
        Character(String name, String job, int hp, int codeLength, double crit) {
            this.name = name;
            this.job = job;
            this.maxHP = hp;
            this.hp = hp;
            this.codeLength = codeLength;
            this.critMultiplier = crit;
        }
    }

    public static void main(String[] args) {

        System.out.print(ColorPool.BRIGHT_RED +"\n플레이어 1님의 이름을 입력하세요: " + ColorPool.RESET);
        String name1 = sc.nextLine();

        System.out.print(ColorPool.BRIGHT_BLUE +"\n플레이어 2님의 이름을 입력하세요: " + ColorPool.RESET);
        String name2 = sc.nextLine();

        Character player1 = selectCharacter(name1);
        Character player2 = selectCharacter(name2);

        System.out.println("\n=== 배틀 시작! ===");

        while (player1.hp > 0 && player2.hp > 0) {

            printStatus(player1, player2);

            System.out.println("\n ▶ " + player1.name + " 턴!");
            attack(player1, player2);
            if (player2.hp <= 0) break;

            System.out.println("\n ▶ " + player2.name + " 턴!");
            attack(player2, player1);
        }

        System.out.println("\n=== 게임 종료 ===");
        System.out.println(player1.hp > 0 ? player1.name + " 승리!" : player2.name + " 승리!");
    }

    static Character selectCharacter(String playerName) {

        System.out.println(ColorPool.YELLOW +"\n=============================");
        System.out.println(ColorPool.BRIGHT_RED +"\n = " + ColorPool.RESET + playerName + ColorPool.BRIGHT_RED + " 님의 직업을 선택해주세요! = ");
        System.out.println(ColorPool.YELLOW +"\n=============================");

        System.out.println("\n1.전사");
        System.out.println("  매우 높은 체력을 지닌 안정적인 직업");
        //System.out.println("  특성: 50% 확률로 받은 피해를 20% 감소시킵니다.");
        System.out.println("  [HP: 200] [ATK: 2] [CRI: 1.3X]");

        System.out.println("\n2.도적");
        System.out.println("  높은 치명타 피해량으로 적을 제압하는 직업.");
        //System.out.println("  특성: 치명타 적중시 2배의 피해를 줍니다.");
        System.out.println("  [HP: 80] [ATK: 3] [CRI: 2.0X]");

        System.out.println("\n3.사제");
        System.out.println("  균형잡힌 능력치와 회복 능력을 지닌 안정적인 직업.");
        //System.out.println("  특성: 턴 종료시 5의 체력을 회복합니다.");
        System.out.println("  [HP: 100] [ATK: 3] [CRI: 1.2X]");

        System.out.println("\n4.마법사");
        //System.out.println("  체력이 매우 낮지만 공격 기회가 많습니다.");
        System.out.println("  [HP: 50] [ATK: 4] [CRI: 1.5X]");

        System.out.println("\n============================="+ ColorPool.RESET);

        int sel;

        while (true) {
            System.out.print("\n번호 입력: ");

            // 입력이 잘못될 경우 대비한 예외 처리
            while (!sc.hasNextInt()) {
                System.out.println("숫자만 입력하세요!");
                sc.next();
            }

            sel = sc.nextInt();
            sc.nextLine();

            if (sel >= 1 && sel <= 4) break;
            System.out.println("※ 1~4 중에서 선택해주세요.");
        }

        switch (sel) {
            case 1: return new Character(playerName, "전사", 200, 2, 1.3);
            case 2: return new Character(playerName, "도적", 80, 3, 2.0);
            case 3: return new Character(playerName, "사제", 100, 3, 1.2);
            case 4: return new Character(playerName, "마법사", 50, 4, 1.5);
        }

        throw new IllegalStateException("직업 선택 오류!");
    }

    static void printStatus(Character p, Character e) {
        System.out.println("\n-------------------------------");
        System.out.println(p.name + " (" + p.job + ") : " + hpBar(p));
        System.out.println(e.name + " (" + e.job + ") : " + hpBar(e));
        System.out.println("-------------------------------");
    }

    static String hpBar(Character c) {
        int bars = (int)((double)c.hp / c.maxHP * 10);
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < 10; i++)
            sb.append(i < bars ? ColorPool.RED + "■" + ColorPool.RESET : "□");
        sb.append("] " + c.hp + "/" + c.maxHP);
        return sb.toString();
    }

    static void attack(Character attacker, Character defender) {

        String code = generateCode(attacker.codeLength);

        sc.nextLine();

        System.out.print("공격 숫자 입력 (" + attacker.codeLength + "개, 예: 1 3 5): ");

        String[] tokens;

        while (true) {
            String line = sc.nextLine().trim();

            tokens = line.split("\\s+");

            if (tokens.length == attacker.codeLength) break;

            System.out.println("※ 정확히 " + attacker.codeLength + "개의 숫자를 입력해야 합니다!");
            System.out.print("다시 입력: ");
        }

        StringBuilder sb = new StringBuilder();
        for (String t : tokens) sb.append(t);
        String input = sb.toString();

        int exact = 0;
        int partial = 0;

        for (int i = 0; i < code.length(); i++) {
            if (input.charAt(i) == code.charAt(i)) exact++;
            else if (code.contains(input.charAt(i) + "")) partial++;
        }

        System.out.println("▶ 정답: " + code);

        int damage = 0;

        if (exact == attacker.codeLength) {
            System.out.println("🔥 크리티컬 히트!");
            damage = 30;
        } else if (exact > 0) {
            System.out.println("✔ 부분 일치!");
            damage = 10;
        } else if (partial > 0) {
            System.out.println("✔ 숫자 존재 (위치 다름)");
            damage = 5;
        } else {
            System.out.println("❌ 빗나감!");
        }

        damage = (int)(damage * attacker.critMultiplier);

        defender.hp -= damage;
        if (defender.hp < 0) defender.hp = 0;

        System.out.println("▶ " + damage + " 데미지!");
    }
    
    static String generateCode(int len) {
        Random r = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < len; i++) {
            sb.append(r.nextInt(10));
        }
        return sb.toString();
    }

}


