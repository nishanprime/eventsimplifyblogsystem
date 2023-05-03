import Container from "@/components/container";

import styles from "../styles/footer.module.css";
import Link from "next/link";
import Logo from "./logo";
import ColumnEntry from "./footerColumnEntry";
import ThemeSwitch from "./themeSwitch";

export default function Footer(props) {
  const columnDetails = [
    {
      title: "About Us",
      entries: [
        {
          title: "About",
          link: "/about"
        },
        {
          title: "Features",
          link: "/features"
        },
        {
          title: "Works",
          link: "/works"
        },
        {
          title: "Blog",
          link: "/blog"
        }
      ]
    },

    {
      title: "Events",
      entries: [
        {
          title: "About",
          link: "/about"
        },
        {
          title: "Features",
          link: "/features"
        },
        {
          title: "Works",
          link: "/works"
        },
        {
          title: "Blog",
          link: "/blog"
        }
      ]
    },

    {
      title: "Contact Us",
      entries: [
        {
          title: "About",
          link: "/about"
        },
        {
          title: "Features",
          link: "/features"
        },
        {
          title: "Works",
          link: "/works"
        },
        {
          title: "Blog",
          link: "/blog"
        }
      ]
    },

    {
      title: "Blogs",
      entries: [
        {
          title: "About",
          link: "/about"
        },
        {
          title: "Features",
          link: "/features"
        },
        {
          title: "Works",
          link: "/works"
        },
        {
          title: "Blog",
          link: "/blog"
        }
      ]
    }
  ];
  return (
    <div>
      <div className={`bg-secondaryBackground pb-20 pt-12 md:pt-14`}>
        <div className={` hidden justify-center lg:flex`}>
          <div
            className={`flex flex-row justify-between  pb-5  ${styles.sub_container}`}>
            <div className="flex flex-col gap-4">
              <Link href="https://eventsimplify.com">
                <Logo />
              </Link>
              <div>
                <div className="flex flex-row gap-4">
                  <figure>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1453_421)">
                        <path
                          d="M14.362 4.73623C14.3713 4.87689 14.3713 5.01823 14.3713 5.16023C14.3713 9.49823 11.0687 14.5002 5.03133 14.5002V14.4976C3.248 14.5002 1.50133 13.9896 0 13.0262C0.259333 13.0576 0.52 13.0729 0.781333 13.0736C2.26 13.0749 3.696 12.5789 4.858 11.6656C3.45333 11.6389 2.22133 10.7229 1.79133 9.38556C2.28333 9.48023 2.79 9.46089 3.27333 9.32956C1.74133 9.02023 0.64 7.67423 0.64 6.11156C0.64 6.09756 0.64 6.08356 0.64 6.07023C1.09667 6.32489 1.60733 6.46556 2.13 6.48089C0.687333 5.51756 0.242 3.59889 1.11333 2.09889C2.78 4.14956 5.23933 5.39623 7.87867 5.52889C7.614 4.38889 7.976 3.19423 8.828 2.39223C10.15 1.14889 12.2293 1.21289 13.4727 2.53489C14.208 2.39023 14.9127 2.12023 15.5573 1.73823C15.312 2.49823 14.7993 3.14356 14.114 3.55423C14.7653 3.47623 15.4007 3.30223 16 3.03689C15.5593 3.69623 15.0047 4.27156 14.362 4.73623Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1453_421">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>
                  <figure>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1453_425)">
                        <path
                          d="M16 8.04883C16 12.0415 13.0707 15.3515 9.24667 15.9522V10.3768H11.106L11.46 8.07016H9.24667V6.57349C9.24667 5.94216 9.556 5.32749 10.5467 5.32749H11.5527V3.36349C11.5527 3.36349 10.6393 3.20749 9.76667 3.20749C7.944 3.20749 6.75333 4.31216 6.75333 6.31149V8.06949H4.72733V10.3762H6.75333V15.9515C2.93 15.3502 0 12.0408 0 8.04883C0 3.63083 3.582 0.0488281 8 0.0488281C12.418 0.0488281 16 3.63016 16 8.04883Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1453_425">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>
                  <figure>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1453_428)">
                        <path
                          d="M8 1.44133C10.136 1.44133 10.3893 1.44933 11.2327 1.488C12.1047 1.528 13.0027 1.72667 13.638 2.362C14.2793 3.00333 14.472 3.89267 14.512 4.76733C14.5507 5.61067 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.512 11.2327C14.4727 12.1 14.2693 13.0067 13.638 13.638C12.9967 14.2793 12.108 14.472 11.2327 14.512C10.3893 14.5507 10.136 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.76733 14.512C3.90667 14.4727 2.988 14.2647 2.362 13.638C1.724 13 1.528 12.102 1.488 11.2327C1.44933 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.44933 5.61067 1.488 4.76733C1.52733 3.90333 1.73267 2.99133 2.362 2.362C3.002 1.722 3.89467 1.528 4.76733 1.488C5.61067 1.44933 5.864 1.44133 8 1.44133ZM8 0C5.82733 0 5.55467 0.00933333 4.70133 0.048C3.46467 0.104667 2.23667 0.448667 1.34267 1.34267C0.445333 2.24 0.104667 3.46533 0.048 4.70133C0.00933333 5.55467 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.104667 12.534 0.45 13.7653 1.34267 14.6573C2.23933 15.554 3.46667 15.8953 4.70133 15.952C5.55467 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C12.5347 15.8953 13.764 15.5507 14.6573 14.6573C15.5553 13.7593 15.8953 12.5347 15.952 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55467 15.952 4.70133C15.8953 3.46467 15.5507 2.236 14.6573 1.34267C13.762 0.447333 12.5313 0.104 11.2987 0.048C10.4453 0.00933333 10.1727 0 8 0Z"
                          fill="black"
                        />
                        <path
                          d="M8.00009 3.89209C5.73142 3.89209 3.89209 5.73142 3.89209 8.00009C3.89209 10.2688 5.73142 12.1081 8.00009 12.1081C10.2688 12.1081 12.1081 10.2688 12.1081 8.00009C12.1081 5.73142 10.2688 3.89209 8.00009 3.89209ZM8.00009 10.6668C6.52742 10.6668 5.33342 9.47276 5.33342 8.00009C5.33342 6.52742 6.52742 5.33342 8.00009 5.33342C9.47276 5.33342 10.6668 6.52742 10.6668 8.00009C10.6668 9.47276 9.47276 10.6668 8.00009 10.6668Z"
                          fill="black"
                        />
                        <path
                          d="M12.2705 4.68953C12.8007 4.68953 13.2305 4.25972 13.2305 3.72953C13.2305 3.19934 12.8007 2.76953 12.2705 2.76953C11.7404 2.76953 11.3105 3.19934 11.3105 3.72953C11.3105 4.25972 11.7404 4.68953 12.2705 4.68953Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1453_428">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </figure>
                  <figure>
                    <svg
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.6653 2.12377C15.4813 1.4311 14.9393 0.885103 14.2507 0.69977C13.0033 0.36377 8 0.36377 8 0.36377C8 0.36377 2.99667 0.36377 1.74867 0.69977C1.06067 0.885103 0.518667 1.43044 0.334667 2.12377C0 3.37977 0 5.99977 0 5.99977C0 5.99977 0 8.61977 0.334667 9.87577C0.518667 10.5684 1.06067 11.1144 1.74933 11.2998C2.99667 11.6358 8 11.6358 8 11.6358C8 11.6358 13.0033 11.6358 14.2513 11.2998C14.9393 11.1144 15.4813 10.5691 15.666 9.87577C16 8.61977 16 5.99977 16 5.99977C16 5.99977 16 3.37977 15.6653 2.12377ZM6.364 8.3791V3.62044L10.5453 5.99977L6.364 8.3791Z"
                        fill="black"
                      />
                    </svg>
                  </figure>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-32 ">
              {columnDetails.map((column, index) => (
                <ColumnEntry key={index} columnDetails={column} />
              ))}
            </div>
          </div>
        </div>
        {/* for smaller screen */}
        <div className="flex flex-col items-center justify-center gap-y-5 lg:hidden">
          <Link href={"https://eventsimplify.com"}>
            <figure>
              <svg
                width="206"
                height="31"
                viewBox="0 0 206 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.60493 1.6H13.3249C13.8796 1.6 14.3383 1.78133 14.7009 2.144C15.0849 2.48533 15.2769 2.93333 15.2769 3.488C15.2769 4.02133 15.0849 4.45867 14.7009 4.8C14.3383 5.12 13.8796 5.28 13.3249 5.28H4.36493L4.65293 4.736V10.976L4.39693 10.72H11.8849C12.4396 10.72 12.8983 10.9013 13.2609 11.264C13.6449 11.6053 13.8369 12.0533 13.8369 12.608C13.8369 13.1413 13.6449 13.5787 13.2609 13.92C12.8983 14.24 12.4396 14.4 11.8849 14.4H4.49293L4.65293 14.144V20.608L4.39693 20.32H13.3249C13.8796 20.32 14.3383 20.512 14.7009 20.896C15.0849 21.2587 15.2769 21.6853 15.2769 22.176C15.2769 22.7093 15.0849 23.1467 14.7009 23.488C14.3383 23.8293 13.8796 24 13.3249 24H2.60493C2.05026 24 1.58093 23.8187 1.19693 23.456C0.834263 23.072 0.65293 22.6027 0.65293 22.048V3.552C0.65293 2.99733 0.834263 2.53867 1.19693 2.176C1.58093 1.792 2.05026 1.6 2.60493 1.6ZM18.9447 6.88C19.35 6.88 19.7233 6.98667 20.0647 7.2C20.406 7.392 20.662 7.69067 20.8327 8.096L25.5367 18.848L24.8327 19.168L29.6327 8.128C29.9953 7.27467 30.5607 6.86933 31.3287 6.912C31.862 6.912 32.2887 7.08267 32.6087 7.424C32.95 7.744 33.1207 8.14933 33.1207 8.64C33.1207 8.78933 33.0887 8.94933 33.0247 9.12C32.982 9.29067 32.9287 9.45067 32.8647 9.6L26.8807 22.784C26.5393 23.552 25.9953 23.9573 25.2487 24C24.8433 24.064 24.4487 23.9893 24.0647 23.776C23.702 23.5627 23.4247 23.232 23.2327 22.784L17.2807 9.6C17.238 9.49333 17.1847 9.35467 17.1207 9.184C17.078 9.01333 17.0567 8.81067 17.0567 8.576C17.0567 8.192 17.2273 7.81867 17.5687 7.456C17.91 7.072 18.3687 6.88 18.9447 6.88ZM44.0532 24.32C42.2398 24.32 40.6612 23.9467 39.3172 23.2C37.9945 22.432 36.9705 21.3973 36.2452 20.096C35.5412 18.7947 35.1892 17.3227 35.1892 15.68C35.1892 13.76 35.5732 12.128 36.3412 10.784C37.1305 9.41867 38.1545 8.37333 39.4132 7.648C40.6718 6.92267 42.0052 6.56 43.4132 6.56C44.5012 6.56 45.5252 6.784 46.4852 7.232C47.4665 7.68 48.3305 8.29867 49.0772 9.088C49.8238 9.856 50.4105 10.752 50.8372 11.776C51.2852 12.8 51.5092 13.888 51.5092 15.04C51.4878 15.552 51.2852 15.968 50.9012 16.288C50.5172 16.608 50.0692 16.768 49.5572 16.768H37.3332L36.3732 13.568H48.1172L47.4132 14.208V13.344C47.3705 12.7253 47.1465 12.1707 46.7412 11.68C46.3572 11.1893 45.8665 10.8053 45.2692 10.528C44.6932 10.2293 44.0745 10.08 43.4132 10.08C42.7732 10.08 42.1758 10.1653 41.6212 10.336C41.0665 10.5067 40.5865 10.7947 40.1812 11.2C39.7758 11.6053 39.4558 12.1493 39.2212 12.832C38.9865 13.5147 38.8692 14.3787 38.8692 15.424C38.8692 16.576 39.1038 17.5573 39.5732 18.368C40.0638 19.1573 40.6825 19.7653 41.4292 20.192C42.1972 20.5973 43.0078 20.8 43.8612 20.8C44.6505 20.8 45.2798 20.736 45.7492 20.608C46.2185 20.48 46.5918 20.3307 46.8692 20.16C47.1678 19.968 47.4345 19.808 47.6692 19.68C48.0532 19.488 48.4158 19.392 48.7572 19.392C49.2265 19.392 49.6105 19.552 49.9092 19.872C50.2292 20.192 50.3892 20.5653 50.3892 20.992C50.3892 21.568 50.0905 22.0907 49.4932 22.56C48.9385 23.0293 48.1598 23.4453 47.1572 23.808C46.1545 24.1493 45.1198 24.32 44.0532 24.32ZM64.0162 6.56C65.5948 6.56 66.7895 6.89067 67.6002 7.552C68.4322 8.21333 68.9975 9.09867 69.2962 10.208C69.6162 11.296 69.7762 12.512 69.7762 13.856V22.048C69.7762 22.6027 69.5948 23.072 69.2322 23.456C68.8695 23.8187 68.4108 24 67.8562 24C67.3015 24 66.8428 23.8187 66.4802 23.456C66.1175 23.072 65.9362 22.6027 65.9362 22.048V13.856C65.9362 13.152 65.8402 12.5227 65.6482 11.968C65.4775 11.392 65.1575 10.9333 64.6882 10.592C64.2188 10.2507 63.5468 10.08 62.6722 10.08C61.8188 10.08 61.0935 10.2507 60.4962 10.592C59.9202 10.9333 59.4722 11.392 59.1522 11.968C58.8535 12.5227 58.7042 13.152 58.7042 13.856V22.048C58.7042 22.6027 58.5228 23.072 58.1602 23.456C57.7975 23.8187 57.3388 24 56.7842 24C56.2295 24 55.7708 23.8187 55.4082 23.456C55.0455 23.072 54.8642 22.6027 54.8642 22.048V8.832C54.8642 8.27733 55.0455 7.81867 55.4082 7.456C55.7708 7.072 56.2295 6.88 56.7842 6.88C57.3388 6.88 57.7975 7.072 58.1602 7.456C58.5228 7.81867 58.7042 8.27733 58.7042 8.832V10.208L58.2242 10.112C58.4162 9.74933 58.6935 9.36533 59.0562 8.96C59.4188 8.53333 59.8455 8.13867 60.3362 7.776C60.8268 7.41333 61.3815 7.12533 62.0002 6.912C62.6188 6.67733 63.2908 6.56 64.0162 6.56ZM74.1187 7.2H81.7027C82.2147 7.2 82.6413 7.37067 82.9827 7.712C83.324 8.05333 83.4947 8.48 83.4947 8.992C83.4947 9.48267 83.324 9.89867 82.9827 10.24C82.6413 10.56 82.2147 10.72 81.7027 10.72H74.1187C73.6067 10.72 73.18 10.5493 72.8387 10.208C72.4973 9.86667 72.3267 9.44 72.3267 8.928C72.3267 8.43733 72.4973 8.032 72.8387 7.712C73.18 7.37067 73.6067 7.2 74.1187 7.2ZM77.5427 3.2C78.0973 3.2 78.5453 3.392 78.8867 3.776C79.2493 4.13867 79.4307 4.59733 79.4307 5.152V19.392C79.4307 19.6907 79.484 19.936 79.5907 20.128C79.7187 20.32 79.8787 20.4587 80.0707 20.544C80.284 20.6293 80.508 20.672 80.7427 20.672C80.9987 20.672 81.2333 20.6293 81.4467 20.544C81.66 20.4373 81.9053 20.384 82.1827 20.384C82.4813 20.384 82.748 20.5227 82.9827 20.8C83.2387 21.0773 83.3667 21.4613 83.3667 21.952C83.3667 22.5493 83.036 23.04 82.3747 23.424C81.7347 23.808 81.0413 24 80.2947 24C79.8467 24 79.3453 23.968 78.7907 23.904C78.2573 23.8187 77.7453 23.6373 77.2547 23.36C76.7853 23.0613 76.3907 22.6133 76.0707 22.016C75.7507 21.4187 75.5907 20.5973 75.5907 19.552V5.152C75.5907 4.59733 75.772 4.13867 76.1347 3.776C76.5187 3.392 76.988 3.2 77.5427 3.2ZM86.6534 21.344C86.4401 21.0453 86.3441 20.6613 86.3654 20.192C86.3868 19.7227 86.6641 19.3173 87.1974 18.976C87.5388 18.7627 87.9014 18.6773 88.2854 18.72C88.6694 18.7413 89.0428 18.9333 89.4054 19.296C90.0241 19.9147 90.6748 20.3947 91.3574 20.736C92.0401 21.0773 92.8934 21.248 93.9174 21.248C94.2374 21.2267 94.5894 21.184 94.9734 21.12C95.3574 21.0347 95.6881 20.864 95.9654 20.608C96.2641 20.3307 96.4134 19.9147 96.4134 19.36C96.4134 18.8907 96.2534 18.5173 95.9334 18.24C95.6134 17.9627 95.1868 17.728 94.6534 17.536C94.1414 17.344 93.5654 17.1627 92.9254 16.992C92.2641 16.8 91.5814 16.5867 90.8774 16.352C90.1948 16.1173 89.5654 15.8187 88.9894 15.456C88.4134 15.072 87.9441 14.5707 87.5814 13.952C87.2188 13.3333 87.0374 12.5547 87.0374 11.616C87.0374 10.5493 87.3361 9.64267 87.9334 8.896C88.5308 8.14933 89.2988 7.57333 90.2374 7.168C91.1974 6.76267 92.2001 6.56 93.2454 6.56C93.9068 6.56 94.6001 6.64533 95.3254 6.816C96.0508 6.96533 96.7441 7.22133 97.4054 7.584C98.0668 7.92533 98.6214 8.384 99.0694 8.96C99.3041 9.28 99.4428 9.664 99.4854 10.112C99.5281 10.56 99.3254 10.9653 98.8774 11.328C98.5574 11.584 98.1841 11.7013 97.7574 11.68C97.3308 11.6373 96.9788 11.488 96.7014 11.232C96.3388 10.7627 95.8481 10.3893 95.2294 10.112C94.6321 9.83467 93.9388 9.696 93.1494 9.696C92.8294 9.696 92.4774 9.73867 92.0934 9.824C91.7308 9.888 91.4108 10.048 91.1334 10.304C90.8561 10.5387 90.7174 10.9227 90.7174 11.456C90.7174 11.9467 90.8774 12.3413 91.1974 12.64C91.5174 12.9173 91.9441 13.152 92.4774 13.344C93.0321 13.5147 93.6188 13.6853 94.2374 13.856C94.8774 14.0267 95.5281 14.2293 96.1894 14.464C96.8508 14.6987 97.4588 15.008 98.0134 15.392C98.5681 15.776 99.0161 16.2773 99.3574 16.896C99.6988 17.4933 99.8694 18.2613 99.8694 19.2C99.8694 20.288 99.5494 21.216 98.9094 21.984C98.2694 22.752 97.4694 23.3387 96.5094 23.744C95.5494 24.128 94.5681 24.32 93.5654 24.32C92.3068 24.32 91.0481 24.1067 89.7894 23.68C88.5308 23.232 87.4854 22.4533 86.6534 21.344ZM106.699 22.048C106.699 22.6027 106.518 23.072 106.155 23.456C105.792 23.8187 105.334 24 104.779 24C104.224 24 103.766 23.8187 103.403 23.456C103.04 23.072 102.859 22.6027 102.859 22.048V8.832C102.859 8.27733 103.04 7.81867 103.403 7.456C103.766 7.072 104.224 6.88 104.779 6.88C105.334 6.88 105.792 7.072 106.155 7.456C106.518 7.81867 106.699 8.27733 106.699 8.832V22.048ZM104.747 4.8C104.022 4.8 103.51 4.68267 103.211 4.448C102.912 4.21333 102.763 3.79733 102.763 3.2V2.592C102.763 1.97333 102.923 1.55733 103.243 1.344C103.584 1.10933 104.096 0.991999 104.779 0.991999C105.526 0.991999 106.048 1.10933 106.347 1.344C106.646 1.57867 106.795 1.99467 106.795 2.592V3.2C106.795 3.81867 106.635 4.24533 106.315 4.48C105.995 4.69333 105.472 4.8 104.747 4.8ZM119.637 6.56C121.344 6.56 122.603 6.976 123.413 7.808C124.224 8.61867 124.757 9.67467 125.013 10.976L124.469 10.688L124.725 10.176C124.981 9.68533 125.376 9.16267 125.909 8.608C126.443 8.032 127.083 7.552 127.829 7.168C128.597 6.76267 129.451 6.56 130.389 6.56C131.925 6.56 133.088 6.89067 133.877 7.552C134.688 8.21333 135.243 9.09867 135.541 10.208C135.84 11.296 135.989 12.512 135.989 13.856V22.048C135.989 22.6027 135.808 23.072 135.445 23.456C135.083 23.8187 134.624 24 134.069 24C133.515 24 133.056 23.8187 132.693 23.456C132.331 23.072 132.149 22.6027 132.149 22.048V13.856C132.149 13.152 132.064 12.5227 131.893 11.968C131.723 11.392 131.413 10.9333 130.965 10.592C130.517 10.2507 129.877 10.08 129.045 10.08C128.235 10.08 127.541 10.2507 126.965 10.592C126.389 10.9333 125.952 11.392 125.653 11.968C125.376 12.5227 125.237 13.152 125.237 13.856V22.048C125.237 22.6027 125.056 23.072 124.693 23.456C124.331 23.8187 123.872 24 123.317 24C122.763 24 122.304 23.8187 121.941 23.456C121.579 23.072 121.397 22.6027 121.397 22.048V13.856C121.397 13.152 121.312 12.5227 121.141 11.968C120.971 11.392 120.661 10.9333 120.213 10.592C119.765 10.2507 119.125 10.08 118.293 10.08C117.483 10.08 116.789 10.2507 116.213 10.592C115.637 10.9333 115.2 11.392 114.901 11.968C114.624 12.5227 114.485 13.152 114.485 13.856V22.048C114.485 22.6027 114.304 23.072 113.941 23.456C113.579 23.8187 113.12 24 112.565 24C112.011 24 111.552 23.8187 111.189 23.456C110.827 23.072 110.645 22.6027 110.645 22.048V8.832C110.645 8.27733 110.827 7.81867 111.189 7.456C111.552 7.072 112.011 6.88 112.565 6.88C113.12 6.88 113.579 7.072 113.941 7.456C114.304 7.81867 114.485 8.27733 114.485 8.832V10.208L114.005 10.112C114.197 9.74933 114.464 9.36533 114.805 8.96C115.147 8.53333 115.563 8.13867 116.053 7.776C116.544 7.41333 117.088 7.12533 117.685 6.912C118.283 6.67733 118.933 6.56 119.637 6.56ZM149.009 6.56C150.503 6.56 151.836 6.944 153.009 7.712C154.204 8.45867 155.143 9.49333 155.825 10.816C156.529 12.1387 156.881 13.6747 156.881 15.424C156.881 17.1733 156.529 18.72 155.825 20.064C155.143 21.3867 154.215 22.432 153.041 23.2C151.889 23.9467 150.588 24.32 149.137 24.32C148.284 24.32 147.484 24.1813 146.737 23.904C145.991 23.6267 145.329 23.2747 144.753 22.848C144.199 22.4213 143.761 21.9947 143.441 21.568C143.143 21.12 142.993 20.7467 142.993 20.448L143.985 20.032V28.448C143.985 29.0027 143.804 29.4613 143.441 29.824C143.079 30.208 142.62 30.4 142.065 30.4C141.511 30.4 141.052 30.2187 140.689 29.856C140.327 29.4933 140.145 29.024 140.145 28.448V8.832C140.145 8.27733 140.327 7.81867 140.689 7.456C141.052 7.072 141.511 6.88 142.065 6.88C142.62 6.88 143.079 7.072 143.441 7.456C143.804 7.81867 143.985 8.27733 143.985 8.832V10.4L143.441 10.112C143.441 9.83467 143.591 9.504 143.889 9.12C144.188 8.71467 144.593 8.32 145.105 7.936C145.617 7.53067 146.204 7.2 146.865 6.944C147.548 6.688 148.263 6.56 149.009 6.56ZM148.529 10.08C147.591 10.08 146.769 10.3147 146.065 10.784C145.361 11.2533 144.807 11.8933 144.401 12.704C144.017 13.4933 143.825 14.4 143.825 15.424C143.825 16.4267 144.017 17.344 144.401 18.176C144.807 18.9867 145.361 19.6267 146.065 20.096C146.769 20.5653 147.591 20.8 148.529 20.8C149.468 20.8 150.279 20.5653 150.961 20.096C151.665 19.6267 152.209 18.9867 152.593 18.176C152.999 17.344 153.201 16.4267 153.201 15.424C153.201 14.4 152.999 13.4933 152.593 12.704C152.209 11.8933 151.665 11.2533 150.961 10.784C150.279 10.3147 149.468 10.08 148.529 10.08ZM164.399 22.048C164.399 22.6027 164.207 23.072 163.823 23.456C163.461 23.8187 163.002 24 162.447 24C161.914 24 161.466 23.8187 161.103 23.456C160.741 23.072 160.559 22.6027 160.559 22.048V2.272C160.559 1.71733 160.741 1.25867 161.103 0.895998C161.487 0.511999 161.957 0.32 162.511 0.32C163.066 0.32 163.514 0.511999 163.855 0.895998C164.218 1.25867 164.399 1.71733 164.399 2.272V22.048ZM172.48 22.048C172.48 22.6027 172.299 23.072 171.936 23.456C171.574 23.8187 171.115 24 170.56 24C170.006 24 169.547 23.8187 169.184 23.456C168.822 23.072 168.64 22.6027 168.64 22.048V8.832C168.64 8.27733 168.822 7.81867 169.184 7.456C169.547 7.072 170.006 6.88 170.56 6.88C171.115 6.88 171.574 7.072 171.936 7.456C172.299 7.81867 172.48 8.27733 172.48 8.832V22.048ZM170.528 4.8C169.803 4.8 169.291 4.68267 168.992 4.448C168.694 4.21333 168.544 3.79733 168.544 3.2V2.592C168.544 1.97333 168.704 1.55733 169.024 1.344C169.366 1.10933 169.878 0.991999 170.56 0.991999C171.307 0.991999 171.83 1.10933 172.128 1.344C172.427 1.57867 172.576 1.99467 172.576 2.592V3.2C172.576 3.81867 172.416 4.24533 172.096 4.48C171.776 4.69333 171.254 4.8 170.528 4.8ZM185.227 0.32C185.696 0.32 186.155 0.384 186.603 0.511999C187.051 0.639999 187.424 0.853332 187.723 1.152C188.021 1.42933 188.171 1.80267 188.171 2.272C188.171 2.80533 188.011 3.232 187.691 3.552C187.392 3.85067 187.04 4 186.635 4C186.443 4 186.155 3.95733 185.771 3.872C185.387 3.76533 185.013 3.712 184.651 3.712C184.117 3.712 183.701 3.82933 183.403 4.064C183.125 4.29867 182.933 4.576 182.827 4.896C182.72 5.19467 182.667 5.46133 182.667 5.696V22.048C182.667 22.6027 182.485 23.072 182.123 23.456C181.76 23.8187 181.301 24 180.747 24C180.192 24 179.733 23.8187 179.371 23.456C179.008 23.072 178.827 22.6027 178.827 22.048V5.728C178.827 4.21333 179.36 2.93333 180.427 1.888C181.493 0.842666 183.093 0.32 185.227 0.32ZM185.579 7.2C186.091 7.2 186.517 7.37067 186.859 7.712C187.2 8.032 187.371 8.448 187.371 8.96C187.371 9.472 187.2 9.89867 186.859 10.24C186.517 10.56 186.091 10.72 185.579 10.72H177.099C176.587 10.72 176.16 10.56 175.819 10.24C175.477 9.89867 175.307 9.472 175.307 8.96C175.307 8.448 175.477 8.032 175.819 7.712C176.16 7.37067 176.587 7.2 177.099 7.2H185.579ZM203.099 6.88C203.654 6.88 204.113 7.072 204.475 7.456C204.838 7.81867 205.019 8.27733 205.019 8.832V22.432C205.019 24.3947 204.646 25.952 203.899 27.104C203.174 28.2773 202.193 29.12 200.955 29.632C199.718 30.144 198.331 30.4 196.795 30.4C196.113 30.4 195.387 30.3467 194.619 30.24C193.851 30.1333 193.222 29.9733 192.731 29.76C192.091 29.4827 191.643 29.1307 191.387 28.704C191.153 28.2987 191.11 27.8613 191.259 27.392C191.451 26.7733 191.761 26.3467 192.187 26.112C192.614 25.8987 193.062 25.8773 193.531 26.048C193.873 26.1547 194.321 26.3147 194.875 26.528C195.43 26.7627 196.07 26.88 196.795 26.88C197.777 26.88 198.587 26.7413 199.227 26.464C199.889 26.208 200.379 25.76 200.699 25.12C201.041 24.5013 201.211 23.648 201.211 22.56V20.416L201.883 21.184C201.521 21.888 201.062 22.4747 200.507 22.944C199.974 23.392 199.334 23.7333 198.587 23.968C197.841 24.2027 196.987 24.32 196.027 24.32C194.897 24.32 193.905 24.064 193.051 23.552C192.219 23.0187 191.569 22.2933 191.099 21.376C190.63 20.4373 190.395 19.3707 190.395 18.176V8.832C190.395 8.27733 190.577 7.81867 190.939 7.456C191.302 7.072 191.761 6.88 192.315 6.88C192.87 6.88 193.329 7.072 193.691 7.456C194.054 7.81867 194.235 8.27733 194.235 8.832V17.024C194.235 18.4107 194.534 19.392 195.131 19.968C195.75 20.5227 196.603 20.8 197.691 20.8C198.438 20.8 199.067 20.6613 199.579 20.384C200.091 20.0853 200.486 19.6587 200.763 19.104C201.041 18.528 201.179 17.8347 201.179 17.024V8.832C201.179 8.27733 201.361 7.81867 201.723 7.456C202.086 7.072 202.545 6.88 203.099 6.88Z"
                  fill="#5A86EF"
                />
              </svg>
            </figure>
          </Link>
          <div className="flex flex-row gap-4">
            <figure>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1453_421)">
                  <path
                    d="M14.362 4.73623C14.3713 4.87689 14.3713 5.01823 14.3713 5.16023C14.3713 9.49823 11.0687 14.5002 5.03133 14.5002V14.4976C3.248 14.5002 1.50133 13.9896 0 13.0262C0.259333 13.0576 0.52 13.0729 0.781333 13.0736C2.26 13.0749 3.696 12.5789 4.858 11.6656C3.45333 11.6389 2.22133 10.7229 1.79133 9.38556C2.28333 9.48023 2.79 9.46089 3.27333 9.32956C1.74133 9.02023 0.64 7.67423 0.64 6.11156C0.64 6.09756 0.64 6.08356 0.64 6.07023C1.09667 6.32489 1.60733 6.46556 2.13 6.48089C0.687333 5.51756 0.242 3.59889 1.11333 2.09889C2.78 4.14956 5.23933 5.39623 7.87867 5.52889C7.614 4.38889 7.976 3.19423 8.828 2.39223C10.15 1.14889 12.2293 1.21289 13.4727 2.53489C14.208 2.39023 14.9127 2.12023 15.5573 1.73823C15.312 2.49823 14.7993 3.14356 14.114 3.55423C14.7653 3.47623 15.4007 3.30223 16 3.03689C15.5593 3.69623 15.0047 4.27156 14.362 4.73623Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1453_421">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </figure>
            <figure>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1453_425)">
                  <path
                    d="M16 8.04883C16 12.0415 13.0707 15.3515 9.24667 15.9522V10.3768H11.106L11.46 8.07016H9.24667V6.57349C9.24667 5.94216 9.556 5.32749 10.5467 5.32749H11.5527V3.36349C11.5527 3.36349 10.6393 3.20749 9.76667 3.20749C7.944 3.20749 6.75333 4.31216 6.75333 6.31149V8.06949H4.72733V10.3762H6.75333V15.9515C2.93 15.3502 0 12.0408 0 8.04883C0 3.63083 3.582 0.0488281 8 0.0488281C12.418 0.0488281 16 3.63016 16 8.04883Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1453_425">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </figure>
            <figure>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1453_428)">
                  <path
                    d="M8 1.44133C10.136 1.44133 10.3893 1.44933 11.2327 1.488C12.1047 1.528 13.0027 1.72667 13.638 2.362C14.2793 3.00333 14.472 3.89267 14.512 4.76733C14.5507 5.61067 14.5587 5.864 14.5587 8C14.5587 10.136 14.5507 10.3893 14.512 11.2327C14.4727 12.1 14.2693 13.0067 13.638 13.638C12.9967 14.2793 12.108 14.472 11.2327 14.512C10.3893 14.5507 10.136 14.5587 8 14.5587C5.864 14.5587 5.61067 14.5507 4.76733 14.512C3.90667 14.4727 2.988 14.2647 2.362 13.638C1.724 13 1.528 12.102 1.488 11.2327C1.44933 10.3893 1.44133 10.136 1.44133 8C1.44133 5.864 1.44933 5.61067 1.488 4.76733C1.52733 3.90333 1.73267 2.99133 2.362 2.362C3.002 1.722 3.89467 1.528 4.76733 1.488C5.61067 1.44933 5.864 1.44133 8 1.44133ZM8 0C5.82733 0 5.55467 0.00933333 4.70133 0.048C3.46467 0.104667 2.23667 0.448667 1.34267 1.34267C0.445333 2.24 0.104667 3.46533 0.048 4.70133C0.00933333 5.55467 0 5.82733 0 8C0 10.1727 0.00933333 10.4453 0.048 11.2987C0.104667 12.534 0.45 13.7653 1.34267 14.6573C2.23933 15.554 3.46667 15.8953 4.70133 15.952C5.55467 15.9907 5.82733 16 8 16C10.1727 16 10.4453 15.9907 11.2987 15.952C12.5347 15.8953 13.764 15.5507 14.6573 14.6573C15.5553 13.7593 15.8953 12.5347 15.952 11.2987C15.9907 10.4453 16 10.1727 16 8C16 5.82733 15.9907 5.55467 15.952 4.70133C15.8953 3.46467 15.5507 2.236 14.6573 1.34267C13.762 0.447333 12.5313 0.104 11.2987 0.048C10.4453 0.00933333 10.1727 0 8 0Z"
                    fill="black"
                  />
                  <path
                    d="M8.00009 3.89209C5.73142 3.89209 3.89209 5.73142 3.89209 8.00009C3.89209 10.2688 5.73142 12.1081 8.00009 12.1081C10.2688 12.1081 12.1081 10.2688 12.1081 8.00009C12.1081 5.73142 10.2688 3.89209 8.00009 3.89209ZM8.00009 10.6668C6.52742 10.6668 5.33342 9.47276 5.33342 8.00009C5.33342 6.52742 6.52742 5.33342 8.00009 5.33342C9.47276 5.33342 10.6668 6.52742 10.6668 8.00009C10.6668 9.47276 9.47276 10.6668 8.00009 10.6668Z"
                    fill="black"
                  />
                  <path
                    d="M12.2705 4.68953C12.8007 4.68953 13.2305 4.25972 13.2305 3.72953C13.2305 3.19934 12.8007 2.76953 12.2705 2.76953C11.7404 2.76953 11.3105 3.19934 11.3105 3.72953C11.3105 4.25972 11.7404 4.68953 12.2705 4.68953Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1453_428">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </figure>
            <figure>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.6653 2.12377C15.4813 1.4311 14.9393 0.885103 14.2507 0.69977C13.0033 0.36377 8 0.36377 8 0.36377C8 0.36377 2.99667 0.36377 1.74867 0.69977C1.06067 0.885103 0.518667 1.43044 0.334667 2.12377C0 3.37977 0 5.99977 0 5.99977C0 5.99977 0 8.61977 0.334667 9.87577C0.518667 10.5684 1.06067 11.1144 1.74933 11.2998C2.99667 11.6358 8 11.6358 8 11.6358C8 11.6358 13.0033 11.6358 14.2513 11.2998C14.9393 11.1144 15.4813 10.5691 15.666 9.87577C16 8.61977 16 5.99977 16 5.99977C16 5.99977 16 3.37977 15.6653 2.12377ZM6.364 8.3791V3.62044L10.5453 5.99977L6.364 8.3791Z"
                  fill="black"
                />
              </svg>
            </figure>
          </div>
          <div className="grid w-full grid-cols-2 gap-y-11 text-center">
            <h1>hi</h1>
          </div>
        </div>

        <div
          className={`mb-6 mt-14 flex flex-row justify-center gap-9 `}>
          <Link href="/privacy">
            <p className={`cursor-pointer hover:text-primary`}>
              Privacy Policy
            </p>
          </Link>
          <Link href="/terms">
            <p className={`cursor-pointer hover:text-primary`}>
              Terms
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className={`${styles.divider}`}></div>
          <p className={`mt-6 text-center md:text-justify`}>
            © Copyright 2023, All Rights Reserved by EventSimplify
          </p>
          <p className={`mt-6`}>
            Made in Nepal <span className="text-2xl">🇳🇵</span>
          </p>
        </div>
      </div>
    </div>
  );
}
