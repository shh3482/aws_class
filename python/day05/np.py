# 네이버 뉴스를 가져오는 기능 모음

import requests
from bs4 import BeautifulSoup
import pandas as pd


def get_naver_news_list(keyword: str, start: int = 1):

    url = 'https://search.naver.com/search.naver'

    params = {
        'where': 'news',
        'query': keyword,
        'start': start
    }

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Referer': 'https://www.naver.com/'
    }

    response = requests.get(url, params=params, headers=headers)

    try:
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'lxml')

        links_divs = soup.select('.n8_DDlCjHxLYRO50CY50')

        titles = []
        hrefs = []

        for link_div in links_divs:

            title_link = link_div.select_one('.XEtVZ4N7DI2Pv29xe7f3')
            href_link = link_div.select_one('.RQNKk8QZaQZble3gmgEj [data-heatmap-target=".nav"]')

            if title_link and href_link:
                titles.append(title_link.text)
                hrefs.append(href_link.get("href"))

        return pd.DataFrame({
            'title': titles,
            'href': hrefs
        })

    except Exception as e:
        print(f"예외 발생 : {e}")
        return None


def save_nl(df: pd.DataFrame, keyword: str, start: int = 1):

    if df is None or df.empty:
        return

    df.to_csv(
        f'naver_nl_{keyword}_{start//10 + 1}.csv',
        encoding="utf-8-sig",
        index=False
    )


# 모듈 테스트
if __name__ == "__main__":

    keyword = 'ai'
    start = 1

    nl_df = get_naver_news_list(keyword, start)

    save_nl(nl_df, keyword, start)