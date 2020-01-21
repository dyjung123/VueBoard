<template>
  <div id="qnaboard">
    <div class="qnaboard_content">
      <nav class="header">
        <div class="header__title_wrap">
          <a class="header__title_txt">커뮤니티</a>
          <a class="header__notice_link">공지사항</a>
        </div>
        <div class="header__nav_wrap">
          <div class="header__profile">
            <a class="header__profile text-appleBlue" role="button">
              <img class="header__profile--avatar" src="../../assets/img/SYSTEM_DEFAULT_AVATAR.png" alt="user avatar" aria-hidden="true">
              <span class="header__profile--txt header__profile--user">userName</span>
            </a>
            <a class="header__profile--txt header__logout">로그아웃</a>
          </div>
          <div class="-mt-4px">
            <a class="header__subnav">나의 알림</a>
            <a class="header__subnav">둘러보기</a>
            <a class="header__subnav">검색</a>
            <a class="header__subnav">글쓰기</a>
          </div>
        </div>
      </nav>
      <main class="main" role="main">
        <section class="main__head">
          <div class="main__action_wrap">
            <div class="main__action_category">
              <h1 class="main__action_category--title">Category</h1>
            </div>
            <div class="main__search_wrap">
              <form class="main__search_form">
                <input class="main__search_input" type="search" placeholder="검색 또는 질문하기">
                <button class="main__search_btn">
                  <svg class="w-full h-full" fill="#d6d6d6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
        <section class="board flex flex-col">
          <div class="board__action_bar">
            <div class="board__action_bar--filter">
              <button class="board__btn">
                <span class="board__btn--icon"></span>
                <span class="" aria-hidden="true">필터</span>
              </button>
            </div>
            <div class="block">
              <nav class="float-right">
                <ol class="board__page_list">
                  <li>
                    <span class="board__page_num">페이지 1</span>
                  </li>
                  <li>
                    <a class="fas fa-chevron-right board__next_page"></a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="board__posts_wrap">
            <div class="filter_content"></div>
            <div class="relative w-full py-0 px-4px">
              <article v-for="(item, index) in posts" class="board__post">
                <a class="mr-35px" role="button">
                  <img class="board__post--avatar" src="../../assets/img/SYSTEM_DEFAULT_AVATAR.png" alt="user avatar" aria-hidden="true">
                </a>
                <div>
                  <h4 class="m-0 p-0">
                    <a class="board__post--title">Post Title</a>
                  </h4>
                  <div class="board__post--wrap">
                    <div class="legend_icons"></div>
                    <div class="flex whitespace-no-wrap mr-30px">
                      <a class="block text-appleGray-600">마지막 답글
                        <span class="text-appleGray-600 mr-2">몇시간전</span>
                      </a>
                      &nbsp;작성자:&nbsp;
                      <a class="text-appleGray-600 underline" role="button">동륜</a>
                    </div>
                    <div class="mr-30px">댓글: 1</div>
                    <div class="mr-30px">조회: 6</div>
                    <div class="flex whitespace-no-wrap mr-30px">질문자: &nbsp;
                      <a class="text-appleGray-600 underline" role="button">도환</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component
  export default class QnaBoardView extends Vue {
    private posts: Array<object> = [{test: 'test'},{test: 'test'},{test: 'test'},{test: 'test'},{test: 'test'},{test: 'test'}];
  }
</script>

<style lang="scss" scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css');

  .qnaboard_content {
    max-width: 1024px;
    margin: 0 auto 20px auto;
    color: #333333;
    font-size: 18px;
    direction: ltr;
    text-align: left;

    .header {
      position: relative;
      display: block;
      padding: 0 22px;

      .header__title_wrap {
        align-items: center;
        border-bottom: 1px solid #d6d6d6;
        padding-bottom: 9px;
        padding-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .header__title_txt {
          font-size: 28px;
          font-weight: 200;
          margin: 0;
        }

        .header__notice_link {
          align-self: flex-end;
          margin-bottom: 1px;
          position: relative;
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          margin-left: 21px;
        }
      }

      .header__nav_wrap {
        margin-top: 17px;
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .header__profile {
          display: flex;
          flex-direction: row;
          margin-left: 0;
          align-items: center;

          .header__profile--avatar {
            width: 36px;
            height: 36px;
            object-fit: contain;
            border: 1px solid #c5c5c5;
            border-radius: 50px;
            margin-right: 16px;
          }

          .header__profile--user {
            max-width: 125px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 0;
          }

          .header__logout {
            margin-left: 13px;
            padding-left: 14px;
            border-left: 1px solid #d6d6d6;
            height: 20px;
          }

          .header__profile--txt {
            color: #0070c9;
            position: relative;
            display: inline-block;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;
          }
        }

        .header__subnav {
          position: relative;
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          color: #333;
          margin-left: 21px;
        }
      }
    }

    .main {
      padding: 0 26px;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 30px;
      display: block;

      .main__head {
        position: relative;
        margin: 30px 0;
        padding: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;

        .main__action_wrap {
          width: 75%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin: 0 auto;

          .main__action_category {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .main__action_category--title {
              font-size: 28px;
              font-weight: 300;
              margin: 0;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 400px;
              display: inline-block;
              padding: 0;
            }
          }

          .main__search_wrap {
            margin-top: 25px;
            box-sizing: border-box;

            .main__search_form {
              position: relative;
              width: 100%;
              max-width: 675px;
              margin: auto;
              z-index: 2;
              background-color: #fff;
              padding: 0;

              .main__search_input {
                position: relative;
                width: 100%;
                left: 0;
                padding: .5rem 3.33333rem .27778rem 3.33333rem;
                border-radius: 4px;
                border: 1px solid #d6d6d6;
                background-color: #fff;
                font-size: 1.5rem;
                font-weight: 200;
                line-height: 1.94444rem;
              }

              .main__search_input:focus {
                outline: none;
                box-shadow: 0 0 10px #dcecf5;
              }

              .main__search_btn {
                position: absolute;
                top: .93333rem;
                overflow: hidden;
                width: 1.11111rem;
                height: 1.11111rem;
                margin: 0;
                paddign: 0;
                background-size: 1.11111rem 1.11111rem;
                background-repeat: no-repeat;
                border: 0;
                z-index: 2;
                left: 3%;
              }
            }
          }
        }
      }

      .board__action_bar {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 30px;
        align-items: center;

        .board__action_bar--filter {
          flex-basis: 100%;
          max-width: calc(100% - 65px);
          display: flex;
          flex-direction: row;
          white-space: nowrap;

          .board__btn {
            margin-right: 15px;
            display: flex;
            flex-direction: row;
            font-size: 18px;
            overflow: visible;

            .board__btn--icon {
              display: inline-block;
              background-image: url('../../assets/img/list-bullet.svg');
              background-repeat: no-repeat;
              background-position: 0 .241rem;
              background-size: 1.38889rem 1.05556rem;
              width: 1.5rem;
              height: 1.2rem;
            }
          }
        }

        .board__page_list {
          font-size: 0;
          display: flex;
          flex-direction: row;
          align-content: flex-end;
          align-items: center;

          .board__page_num {
            font-size: 15px;
            padding: 0 15px;
            font-weight: 200;
            display: inline-block;
            white-space: nowrap;
          }

          .board__next_page {
            margin-left: 5px;
            padding: 3px 6px 3px 7px;
            border: 1px solid #d6d6d6;
            border-radius: 2px;
            display: inline-block;
            font-size: 13px;
            line-height: 1.25;
            color: #0070c9;
            cursor: pointer;
          }
        }
      }

      .board__posts_wrap {
        padding-top: 5px;
        display: flex;
        flex-direction: row;
        overflow: hidden;
        margin-left: -4px;

        .board__post {
          display: inline-flex;
          width: 100%;
          padding-bottom: 38px;

          .board__post--avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid #d6d6d6;
            object-fit: contain;
          }

          .board__post--title {
            color: #333;
            font-weight: 400;
            font-size: 18px;
            overflow: hidden;
            cursor: pointer;
          }

          .board__post--wrap {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            color: #666;
            font-size: 16px;
            font-weight: 400;
            margin-top: 5px;
          }
        }
      }
    }
  }
</style>
