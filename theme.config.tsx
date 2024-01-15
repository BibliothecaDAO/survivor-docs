import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ color: "#32CD32" }}>Loot Survivor 💀</span>,
  project: {
    link: "https://github.com/BibliothecaDAO/survivor-docs",
    icon: (
      <svg
        width="60"
        height="20"
        viewBox="0 0 319 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M275.572 23.1837L255.29 43.4575H249.496L223.42 14.4958H217.625L194.446 40.5596L162.576 8.70569H156.781L124.91 40.5596L101.732 14.4958H95.9369L69.861 43.4575H64.0663L43.7849 23.1837L6.11963 60.8334V72.4192L37.9903 165.094L49.5796 170.884L58.2716 173.782H261.085L269.777 170.884L281.366 165.094L313.237 72.4192V60.8334L275.572 23.1837Z"
          fill="#2A2B24"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M318.109 60.6126C317.023 58.1732 308.461 49.5022 297.171 38.539C279.504 21.3782 276.432 17.4615 274.536 17.5973C272.635 17.7332 270.467 21.4461 264.916 27.2192C259.415 32.9413 255.958 36.4674 254.707 37.6617C251.544 40.6784 251.533 40.4011 248.913 37.6617C248.166 36.8806 240.368 28.5549 234.358 22.1253C227.522 14.807 222.378 9.28295 221.343 8.5415C219.402 7.15483 218.196 7.30765 217.042 8.70564C214.835 11.3771 211.315 15.5937 204.932 22.6912C200.597 27.5078 194.305 34.2771 193.863 34.7695C192.777 35.992 192.279 36.0713 190.785 34.577C189.291 33.0828 164.703 5.621 161.993 2.90991C159.282 0.198814 159.491 0.198814 156.781 2.90991C154.07 5.621 129.483 33.0828 127.989 34.577C126.495 36.0656 125.997 35.9864 124.91 34.7695C124.474 34.2771 118.176 27.5078 113.841 22.6912C107.458 15.5937 103.938 11.3771 101.731 8.70564C100.577 7.30765 99.3774 7.15483 97.4308 8.5415C96.3952 9.28295 91.2513 14.807 84.4154 22.1253C78.4057 28.5606 70.6078 36.8806 69.8609 37.6617C67.2408 40.4011 67.2295 40.6784 64.0662 37.6617C62.8156 36.4674 59.358 32.9413 53.8576 27.2192C48.3063 21.4461 46.1333 17.7332 44.2376 17.5973C42.3418 17.4615 39.2691 21.3782 21.6021 38.539C10.3127 49.5022 1.75088 58.1732 0.664375 60.6126C-0.416466 63.0463 0.121125 67.4384 0.381432 69.2779C1.46227 71.5588 8.08882 89.7893 14.9077 108.173C24.0694 132.867 34.2949 160.532 35.0928 162.202C36.5868 165.321 39.4558 170.884 41.974 172.684C44.8204 174.716 49.0872 176.55 52.4769 176.68C53.5973 176.725 77.2909 176.912 108.55 176.742C157.036 176.471 161.738 176.471 210.223 176.742C241.483 176.918 265.176 176.725 266.297 176.68C269.686 176.544 273.953 174.716 276.799 172.684C279.318 170.884 282.187 165.321 283.681 162.202C284.478 160.532 294.704 132.867 303.866 108.173C310.685 89.7893 317.311 71.5588 318.392 69.2779C318.652 67.4384 319.19 63.0463 318.109 60.6126ZM290.947 119.476C285.169 135.623 275.673 161.07 274.989 162.196C273.093 165.315 269.958 167.851 266.297 167.987C265.086 168.032 227.777 168.151 196.444 168.151H122.33C90.9967 168.151 53.6879 168.032 52.4769 167.987C48.8156 167.851 45.6805 165.315 43.7848 162.196C43.1001 161.07 33.6046 135.623 27.8269 119.476C11.5577 73.9869 8.9546 68.2704 9.15266 65.1405C9.36203 61.8238 14.8681 56.9563 28.3928 43.6329C36.3944 35.7486 42.902 28.9737 43.7848 28.9737C44.5318 28.9737 45.5957 30.1906 49.3305 34.011C55.0743 39.8747 62.7081 47.7589 64.0662 49.2475C65.4243 50.736 67.9595 51.0077 69.8609 49.2475C70.8512 48.3306 75.2424 43.7065 83.8495 34.011C93.3394 23.3252 96.3273 20.3311 97.4308 19.2953C99.7339 17.1276 98.953 17.5577 101.392 19.8613C102.512 20.9197 107.164 26.0759 112.144 31.7471C118.001 38.4144 123.354 44.6856 124.027 45.3308C125.595 46.8307 127.626 46.8194 129.12 45.3308C130.614 43.8423 154.851 15.7126 156.849 13.6354C158.546 11.8752 160.244 11.8752 161.942 13.6354C163.939 15.7126 188.159 43.8423 189.653 45.3308C191.147 46.8194 193.179 46.8307 194.746 45.3308C195.419 44.6856 200.773 38.4144 206.63 31.7471C211.609 26.0759 216.261 20.9197 217.382 19.8613C219.82 17.5577 219.04 17.1276 221.343 19.2953C222.446 20.3311 225.434 23.3252 234.924 34.011C243.531 43.7065 247.922 48.3306 248.913 49.2475C250.808 51.0077 253.349 50.736 254.707 49.2475C256.065 47.7589 263.699 39.8747 269.443 34.011C273.178 30.1963 274.242 28.9737 274.989 28.9737C275.871 28.9737 282.379 35.7486 290.381 43.6329C303.905 56.9563 309.411 61.8238 309.621 65.1405C309.819 68.2704 307.216 73.9869 290.947 119.476ZM0.324858 69.5213C0.579506 70.4834 0.517245 70.2061 0.381432 69.2722C0.206008 68.8987 0.177728 68.9553 0.324858 69.5213ZM318.392 69.2779C318.262 70.2061 318.2 70.4834 318.449 69.5269C318.596 68.9553 318.567 68.8987 318.392 69.2779Z"
          fill="#32CD32"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M122.086 124.564H119.189V127.456H122.086V124.564ZM266.885 121.666H235.026V124.558H263.988V127.45H266.885V130.343H269.783V150.605H266.885V153.497H263.988V156.389H235.026V124.547H211.858V121.655H197.377V124.547H208.961V147.707H229.231V156.389H197.372V124.547H188.685V121.655H156.832V124.547H185.794V127.439H188.691V130.331H191.588V139.013H188.691V141.906H185.794V144.798H188.691V147.69H191.588C191.588 147.69 191.436 155.886 191.588 156.372C191.741 156.859 180.005 156.372 180.005 156.372V150.582H177.107V147.69H168.421V156.372H156.837V124.53H153.94V127.422H151.043V124.53H148.145V121.638H122.081V124.53H145.248V127.422H148.145V130.314H151.043V150.577H148.145V153.469H145.248V156.361H122.081V153.469H119.183V150.577H116.286V130.314H119.183V127.422H116.286V124.53H113.389V121.638H96.0104V124.53H87.324V121.638H72.843V124.53H84.4267V136.11H87.324V133.218H90.2214V130.326H93.1187V133.218H96.016V136.11H98.9133V124.53H110.497V156.372H98.9133V153.48H96.016V150.588H93.1187V147.696H90.2214V150.588H87.324V153.48H84.4267V156.372H72.843V124.53H35.1947V130.32H38.092V139.002H40.9893V147.684H43.8867V156.367H46.784V159.259H49.6813V162.151H67.0596V159.259H72.8543V162.151H90.2327V159.259H93.13V156.367H96.0273V159.259H98.9247V162.151H116.303V156.361H119.2V159.253H122.098V162.145H151.06V159.253H156.854V162.145H174.233V156.355H177.13V159.248H180.027V162.14H197.406V159.248H200.303V162.14H235.054V159.248H237.951V162.14H269.805V159.248H272.702V156.355H275.6V147.673H278.497V138.991H281.394V130.309H284.292V124.518H266.913V121.666H266.885ZM64.1623 153.508H61.265V156.401H52.5787V153.508H49.6813V144.826H52.5787V141.934H61.265V144.826H64.1623V153.508ZM130.773 147.724H136.567V144.832H139.465V136.15H136.567V133.257H130.773V136.15H127.875V144.832H130.773V147.724ZM177.107 139.036H180.005V133.246H177.107V130.354H168.421V141.934H177.107V139.036ZM255.301 144.826H258.199V136.144H255.301V133.252H246.615V147.724H255.301V144.826ZM73.4315 115.106C73.4428 115.587 73.7371 115.898 74.0087 115.876C76.493 115.7 83.0855 115.661 90.227 115.683C99.3265 115.712 109.145 116.164 109.92 115.299C111.634 113.374 111.561 99.2527 110.497 98.5112C109.439 97.7698 108.862 100.888 106.638 101.307C104.408 101.732 93.2772 100.645 91.5795 101.596C89.8818 102.552 87.3297 104.296 87.3297 104.296C87.3297 104.296 87.3297 82.29 87.3297 80.1732C89.3669 80.1052 90.6627 80.2184 92.2529 79.6921C93.843 79.16 97.708 72.3795 99.3038 71.1796C100.526 70.2627 102.614 69.6175 98.8171 69.8495C96.3442 70.0023 90.0459 70.1155 87.2335 70.042C87.1825 66.0121 87.1429 64.5575 87.0411 62.4181C86.9109 59.7353 86.6959 56.1978 86.5601 54.698C88.0201 54.6414 89.2141 54.6357 90.227 54.698C91.6474 54.7829 92.0096 56.0903 93.1244 57.8845C93.9279 59.1749 94.8842 60.6182 95.6368 61.071C96.4404 61.5521 99.4113 61.2238 103.073 61.2634C106.881 61.3087 111.182 61.2974 112.149 60.5899C114.204 59.0844 112.727 59.4693 111.861 59.8202C111.193 60.0862 107.945 57.7883 105.393 54.3188C103.186 51.3247 101.698 47.8099 99.0209 46.7911C98.1155 46.4458 95.4162 46.6552 92.9376 46.5986C89.4744 46.5194 88.303 46.2817 86.7581 46.4062C85.3265 46.5194 85.1567 47.6627 80.3863 52.1963C77.5965 54.8451 75.8195 56.5318 74.7727 57.8958C73.9634 58.9485 73.4315 59.8089 73.4372 60.7824C73.4485 62.9841 73.5843 72.0456 73.7258 86.0651C73.8616 100.209 73.4145 114.246 73.4315 115.106ZM113.394 112.984C113.349 114.404 115.047 115.876 116.292 115.876C116.942 115.876 119.687 115.87 122.567 115.876C125.289 115.881 128.028 115.927 128.651 115.78C130.58 115.321 130.133 114.857 128.651 114.817C127.157 114.778 127.377 112.242 127.394 110.861C127.496 102.156 127.423 86.8405 127.394 84.1351C130.439 83.7672 137.937 83.0371 142.356 83.5578C142.356 85.3237 142.039 111.014 142.356 112.989C142.617 114.614 142.588 115.881 145.254 115.881C146.125 115.881 148.326 115.898 150.692 115.904C154.212 115.915 158.077 115.898 158.382 115.785C158.931 115.581 158.846 115.123 158.286 114.919C157.516 114.642 157.188 113.561 156.837 111.733C156.368 109.282 157.703 69.5552 156.837 66.6686C156.719 66.2668 156.385 65.5819 155.638 64.9594C150.947 61.0597 138.938 51.0756 135.215 47.8495C133.902 46.7118 133.313 46.7232 131.78 48.291C126.8 53.3679 123.071 58.275 115.228 65.0273C112.862 67.0648 113.321 68.3327 113.394 70.6249C113.745 81.3731 113.508 109.39 113.394 112.984ZM129.132 60.6861C129.624 60.5843 132.453 63.3972 134.926 65.6046C137.818 68.1912 139.289 69.4703 141.683 71.3947C142.39 71.9607 142.622 72.6738 142.554 73.9982C142.413 76.698 142.362 81.141 142.362 81.141C142.362 81.141 132.668 80.7731 127.4 81.0448C127.394 77.6489 127.349 66.9516 126.919 63.001C127.932 61.7559 128.736 60.7654 129.132 60.6861ZM153.651 59.2372C154.274 58.9995 154.772 59.0787 155.581 59.9107C156.668 61.0257 158.19 62.3445 159.344 63.4821C160.221 64.3424 160.436 65.0103 160.408 65.8932C160.17 73.5794 160.883 103.407 159.44 112.791C159.061 115.248 158.897 115.751 160.697 115.785C169.836 115.944 174.391 115.502 181.934 115.497C186.858 115.497 193.937 115.881 195.934 115.785C196.919 115.74 197.191 115.661 197.383 115.112C197.796 113.934 197.519 106.146 197.768 100.928C197.892 98.2962 197.293 98.6414 196.704 99.5753C196.121 100.509 195.94 100.945 193.422 101.313C191.639 101.573 181.408 100.888 178.364 101.89C175.902 102.7 174.306 103.99 172.377 105.846C173.74 102.807 173.933 94.6568 173.882 84.9954C173.825 75.2151 173.921 64.6594 174.306 59.6221C174.38 58.6995 174.204 57.9524 173.537 57.4034C170.702 55.0772 165.162 50.3002 163.594 49.2984C163.028 48.9362 162.253 49.2135 161.687 49.7456C159.401 51.8737 155.887 56.362 153.748 58.3712C152.293 59.7353 152.378 59.724 153.651 59.2372ZM192.748 59.9107C193.609 59.7353 194.989 60.6748 196.8 62.3218C197.994 63.4086 199.03 64.4896 199.794 65.5084C200.229 66.0913 200.354 66.4932 200.371 67.6308C200.439 71.8135 199.867 111.252 200.275 112.984C200.682 114.71 201.746 115.576 203.172 115.876C203.862 116.023 206.992 115.825 210.217 115.876C213.664 115.927 216.335 115.876 216.878 115.491C217.625 114.959 217.63 114.936 216.493 115.01C215.282 115.089 214.784 114.223 214.756 112.984C214.461 101.29 215.322 72.804 215.429 68.3044C215.52 64.7047 215.412 62.9954 214.948 62.1294C215.48 61.6823 215.871 61.3087 216.589 60.7767C217.483 61.8974 218.96 63.4991 219.679 64.6367C220.556 66.0178 221.892 68.5194 221.897 68.9779C221.959 72.7134 221.841 73.902 221.993 76.6018C222.056 77.6715 223.634 78.8657 227.494 81.6221C230.086 83.4672 232.208 84.9954 232.706 85.9632C233.475 87.4518 233.549 87.4405 233.577 85.4822C233.679 78.396 233.854 69.3288 233.769 64.5405C233.747 63.284 233.498 62.5709 232.802 61.5464C233.447 61.105 233.798 60.7088 234.635 60.1937C235.614 60.9352 237.063 62.6388 238.206 64.0538C239.44 65.5876 240.984 68.1459 240.979 68.8138C240.945 71.7682 240.204 110.64 240.809 112.978C241.42 115.315 242.495 115.848 243.322 115.87C244.148 115.893 247.402 115.87 250.463 115.87C253.525 115.87 256.15 115.966 256.835 115.485C257.876 114.755 257.82 114.699 256.739 114.908C255.72 115.106 255.369 113.878 255.29 112.978C255.171 111.659 255.296 67.7723 255.194 65.8876C255.137 64.8405 252.121 59.1636 248.437 55.4677C245.885 52.9094 243.084 50.0059 240.713 48.0363C239.858 47.3288 239.208 46.8647 237.719 48.2287C235.914 49.8814 232.117 53.1698 229.225 55.2753C227.115 52.0831 226.334 51.1152 223.533 47.94C222.248 46.4855 221.184 46.8137 220.251 47.7476C217.744 50.2493 216.17 52.168 212.141 55.6601C210.591 53.798 207.824 50.3229 205 47.94C204.111 47.1929 203.212 46.7232 202.295 47.8438C201.791 48.4551 200.031 50.5889 197.66 53.3453C195.459 55.9035 193.552 57.8449 192.449 58.9429C191.277 60.1201 191.436 60.1767 192.748 59.9107ZM288.61 71.2022C289.436 70.6928 291.382 67.9251 294.11 65.2197C296.249 63.1029 298.603 61.5578 298.744 60.8786C298.914 60.0522 295.021 56.9053 291.02 53.1585C287.523 49.8814 284.246 45.7666 283.2 45.0535C281.547 43.9215 279.606 44.0121 277.212 46.2138C275.373 47.9004 272.663 51.6416 268.526 55.7677C264.429 59.8541 260.717 62.9275 259.065 64.8405C257.463 66.6969 255.76 70.025 258.193 72.4644C258.878 73.1492 263.824 80.0373 273.251 86.9367C279.227 91.3118 288.587 97.6679 289.181 99.9658C289.419 100.883 288.989 101.726 288.796 102.762C284.02 100.939 268.215 101.143 263.988 101.409C261.47 101.568 260.349 101.149 260.225 99.7677C260.004 97.3623 260.96 97.0566 261.289 95.1379C261.707 92.6419 261.515 93.6211 260.417 95.3304C259.879 96.1737 259.625 96.2473 258.776 97.8377C257.633 99.9772 258.199 103.356 258.295 106.231C258.419 110.176 258.063 112.967 258.776 114.336C259.161 115.072 259.874 115.497 260.802 115.497C266.529 115.491 279.001 115.095 286.091 115.785C286.878 115.864 288.304 115.695 289.085 114.336C290.296 112.236 291.156 106.056 292.174 102.371C294.783 92.9079 297.33 88.7875 295.989 86.8292C294.783 85.0746 286.917 79.3638 280.591 74.3887C275.939 70.7268 268.917 63.2727 267.847 61.7502C268.3 60.9974 270.15 59.0108 271.033 58.0826C272.357 56.6902 273.517 55.53 274.508 54.8961C276.035 56.1526 279.589 59.2089 280.591 60.205C282.136 61.7389 284.139 63.8444 287.155 66.9573C288.581 68.4345 288.609 69.1307 288.123 70.4325C287.529 72.0003 287.449 71.921 288.61 71.2022ZM35.4946 115.106C34.94 114.959 34.7759 113.425 34.7193 110.363C34.4081 94.2437 35.3588 81.8881 34.9174 71.9776C34.7306 67.8006 34.0685 59.6957 33.9497 58.3712C35.3248 56.5374 37.362 54.6357 38.2957 53.9339C40.995 54.9753 44.4016 58.1109 47.2706 60.9804C50.417 64.116 52.9974 67.3875 53.5463 68.1232C54.5479 69.4646 54.7177 70.1495 53.5463 71.3098C52.8785 71.972 50.7622 73.5681 49.0079 74.8812C46.6595 76.6414 44.8373 78.0564 43.0208 79.511C41.425 80.7901 40.6272 81.7806 42.0532 83.2748C43.4057 84.6898 45.771 86.6877 48.6175 88.9687C51.6959 91.4364 54.1518 93.7739 55.2779 94.9512C55.8778 95.5794 55.8721 95.7888 55.9174 96.4793C56.1947 100.888 55.6514 110.267 55.8551 111.931C56.2003 114.687 58.1243 115.904 58.9449 115.887C59.9238 115.87 69.1365 116 70.1438 115.791C71.4113 115.525 71.3604 115.202 70.4324 115.021C69.6571 114.868 69.3742 112.112 69.6628 102.383C69.759 99.1112 70.0476 92.7495 69.0856 90.0327C68.7743 89.1611 63.5512 84.7577 60.784 82.505C56.936 79.3695 53.3539 76.5904 52.6749 75.5547C54.9724 73.7096 62.6231 67.8289 64.1623 66.3857C65.3676 65.2593 65.9562 63.335 64.7395 61.4672C64.0774 60.4484 60.2351 54.9923 56.5342 51.5284C49.4889 44.9346 45.8842 44.2668 44.079 44.3856C42.3305 44.5045 37.7015 49.8418 34.2326 53.3622C27.2043 60.4824 23.1356 63.8783 20.0402 66.9686C17.2108 69.7929 17.539 69.3231 18.4954 72.3738C23.0451 86.8518 30.4695 113.957 31.4315 114.925C32.3652 115.864 33.763 115.893 34.9061 115.791C36.3491 115.661 36.3774 115.338 35.4946 115.106Z"
          fill="#32CD32"
        />
      </svg>
    ),
  },

  primaryHue: 124,
  primarySaturation: 50,

  chat: {
    link: "https://discord.gg/realmsworld",
  },
  docsRepositoryBase:
    "https://github.com/BibliothecaDAO/survivor-docs/tree/main",
  footer: {
    text: "Loot Survivor Docs",
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  faviconGlyph: "💀",
};

export default config;
