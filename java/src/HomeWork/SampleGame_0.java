package HomeWork;

import java.util.*;

import Utility.ColorPool;

public class SampleGame_0 {

	static Scanner sc = new Scanner(System.in);

    // 캐릭터 정보
    static class Character {
        String name;
        int maxHP;
        int hp;
        int codeLength;
        double critMultiplier;

        Character(String name, int hp, int codeLength, double crit) {
            this.name = name;
            this.maxHP = hp;
            this.hp = hp;
            this.codeLength = codeLength;
            this.critMultiplier = crit;
        }
    }

    public static void main(String[] args) {

        Character player = selectCharacter("Player");
        Character enemy = selectCharacter("Enemy");

        System.out.println("\n=== 배틀 시작! ===");

        while (player.hp > 0 && enemy.hp > 0) {
            printStatus(player, enemy);

            System.out.println("\n▶ Player 턴!");
            attack(player, enemy);

            if (enemy.hp <= 0) break;

            System.out.println("\n▶ Enemy 턴!");
            attack(enemy, player);
        }

        System.out.println("\n=== 게임 종료 ===");
        System.out.println(player.hp > 0 ? "Player 승리!" : "Enemy 승리!");
    }

    // 직업 선택 기능
    static Character selectCharacter(String who) {
    	System.out.println("\n========================");
        System.out.println(" " + who + " 캐릭터를 선택하세요.");
        System.out.println("1. 전사 (HP150, 숫자3개)");
        System.out.println("2. 마법사 (HP90, 숫자4개)");
        System.out.println("3. 도적 (HP100, 크리티컬 2배)");

        int sel;
        while (true) {
            System.out.print("번호 입력: ");
            sel = sc.nextInt();
            if (sel >= 1 && sel <= 3) break;
        }

        switch (sel) {
            case 1: return new Character("전사", 150, 3, 1.0);
            case 2: return new Character("마법사", 90, 4, 1.0);
            default: return new Character("도적", 100, 3, 2.0);
        }
    }

    // 체력 바
    static void printStatus(Character p, Character e) {
        System.out.println("\n-------------------------------");
        System.out.println("Player: " + p.name + " " + hpBar(p));
        System.out.println("Enemy : " + e.name + " " + hpBar(e));
        System.out.println("-------------------------------");
    }

    static String hpBar(Character c) {
        int bars = (int)((double)c.hp / c.maxHP * 10);
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < 10; i++) sb.append(i < bars ? ColorPool.RED + "■" : "□");
        sb.append("] " + c.hp + "/" + c.maxHP);
        return sb.toString();
    }

    // 공격 로직
    static void attack(Character attacker, Character defender) {

        String code = generateCode(attacker.codeLength);

        System.out.print("공격 숫자 입력 (" + attacker.codeLength + "자리): ");
        String input = sc.next();

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
        for (int i = 0; i < len; i++) sb.append(r.nextInt(10));
        return sb.toString();
    }
}

