<template>
  <div id="writeboard">
    <div class="content_wrap">
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
      <main class="main">
        <section class="mt-60px" role="form">
          <h1 class="main__form_title">새 게시물 작성하기</h1>
          <div class="mb-36px">
            <input class="main__post_title_input" type="text" placeholder="게시물의 제목" maxlength="250">
          </div>
          <div class="main__post_editor_wrap">
            <div class="main__post_editor_container">
              <div class="main__post_editor" contenteditable="true" placeholder="질문이 무엇입니까?">
                <p></p>
              </div>
            </div>
            <div class="main__post_toolbar_container">
              <div class="main__post_toolbar">
                <section class="main__post_tool_btns">
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn bold"></button>
                  </div>
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn underline"></button>
                  </div>
                </section>
                <section class="main__post_tool_btns">
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn list-bullet2"></button>
                  </div>
                </section>
                <section class="main__post_tool_btns">
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn quote"></button>
                  </div>
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn code"></button>
                  </div>
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn link"></button>
                  </div>
                </section>
                <section class="main__post_tool_btns">
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn docs"></button>
                  </div>
                  <div class="relative inline-block">
                    <button class="main__toolbar_btn picture"></button>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div class="main__post_btns">
            <button class="main__create_post_btn">글쓰기</button>
            <button class="main__cancel_post_btn">취소</button>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    Vue,
    Component,
  } from 'vue-property-decorator';

  @Component
  export default class WriteBoardView extends Vue {

    private title: string = '';

    private content: string = '';

    private category: string = '';

    private errorMsg: string = '';

    private unauthorized: string = '';

    private loading: boolean = false;

    async mounted() {
      this.loading = true;
      // TODO: Load Categories
      // TODO: if topicId exist -> load current topic -> check auth (is login, can edit)
      // TODO: Assign loaded titles, content, and cartridges to data (this.title, this.content, this.category).
      this.loading = false;
    }
  }
</script>

<style lang="scss" scoped>
  @mixin backgroundImg($url) {
    background-image: url("../../assets/img/#{$url}.svg");
  }

  .content_wrap {
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
      position: relative;
      width: 100%;
      padding: 0 16px;
      display: block;

      .main__form_title {
        margin-top: 0;
        margin-bottom: 36px;
        font-size: 40px;
        font-weight: 200;
        line-height: 1.2em;
        color: #333;
        padding: 0;
      }

      .main__post_title_input {
        width: 100%;
        max-width: 814px;
        font-size: 16px;
        line-height: 24px;
        padding: 8px 20px;
        border: .05556rem solid #d6d6d6;
        border-radius: .22222rem;
        min-width: 16.66667rem;
        color: #333;
        outline: none;
      }

      .main__post_editor_wrap {
        margin-bottom: 60px;
        width: 100%;
        max-width: 814px;
        height: fit-content;
        position: relative;

        .main__post_editor_container {
          display: block;
          width: 100%;
          border: 1px solid #d6d6d6;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          border-bottom: 0;
          height: 300px;  /* 임시 계산해서 유동적으로 결정 */
          overflow: hidden;
          background: white;
          line-height: 1.33;
          tab-size: 4;
          white-space: pre-wrap;

          .main__post_editor {
            border: 0;
            padding: 20px;
            overflow-y: auto;
            height: 100%;
          }
        }

        .main__post_toolbar_container {
          position: relative;
          width: 100%;
          margin: 0 auto 20px;
          background-color: #f2f2f2;

          .main__post_toolbar {
            position: relative;
            width: 100%;
            height: 32px;
            display: flex;
            flex-direction: row;
            border: 1px solid #d6d6d6;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            border-top: 0;

            .main__post_tool_btns {
              position: relative;
              display: flex;
              flex-direction: row;
              padding: 0 15px;
              border-right: 1px solid #b8b8b8;
              height: 20px;
              margin-top: 6px;
              &:first-of-type {
                padding-left: 18px;
                border-left: 0;
              }

              .main__toolbar_btn {
                margin-left: 1.5px;
                margin-right: 1.5px;
                margin-top: -6px;
                background-repeat: no-repeat;
                width: 30px;
                height: 32px;
                background-size: cover;
                background-position: center;
                font-size: 18px;
              }

              .bold {
                @include backgroundImg('bold');
              }

              .underline {
                @include backgroundImg('underline');
              }

              .list-bullet2 {
                @include backgroundImg('list-bullet2');
              }

              .quote {
                @include backgroundImg('quote');
              }

              .code {
                @include backgroundImg('code');
              }

              .link {
                @include backgroundImg('link');
              }

              .docs {
                @include backgroundImg('docs');
              }

              .picture {
                @include backgroundImg('picture');
              }

            }
          }
        }
      }

      .main__post_btns {
        display: flex;
        flex-direction: row;
        margin-bottom: 56px;

        .main__create_post_btn {
          width: 164px;
          margin-right: 10px;
          padding: .38889rem 1.11111rem;
          font-size: 18px;
          background: #0070c9 linear-gradient(#42a1ec, #0070c9);
          border: 1px solid #0070c9;
          border-radius: 4px;
          color: #fff;
          min-width: 30px;
          box-sizing: content-box;
        }

        .main__cancel_post_btn {
          padding: .38889rem 1.11111rem;
          font-size: 18px;
          background: #e3e3e3 linear-gradient(#fff, #e3e3e3);
          border: 1px solid #d6d6d6;
          border-radius: 4px;
          color: #0070c9;
          min-width: 30px;
          box-sizing: content-box;
        }
      }
    }
  }
</style>
