export const SITE_TITLE = "Записки сумасшедшей & синского";
export const SITE_DESCRIPTION = "Название говорит само за себя";

export const TAGS_LIST = ["Библия", "равноправие"] as const;

export interface Author {
  name: string;
  tags?: (typeof TAGS_LIST)[number][];
  title?: string;
  href?: string;
  path: string;
  viewBox?: string;
}
export const AUTHORS: Author[] = [
  {
    name: "sinskiy",
    tags: [],
    title: "posts made by sinskiy",
    path: "M8 16C6.90667 16 5.87333 15.79 4.9 15.37C3.92667 14.95 3.07667 14.3767 2.35 13.65C1.62333 12.9233 1.05 12.0733 0.63 11.1C0.21 10.1267 0 9.09333 0 8C0 6.89333 0.21 5.85667 0.63 4.89C1.05 3.92333 1.62333 3.07667 2.35 2.35C3.07667 1.62333 3.92667 1.05 4.9 0.63C5.87333 0.21 6.90667 0 8 0C9.10667 0 10.1433 0.21 11.11 0.63C12.0767 1.05 12.9233 1.62333 13.65 2.35C14.3767 3.07667 14.95 3.92333 15.37 4.89C15.79 5.85667 16 6.89333 16 8C16 9.09333 15.79 10.1267 15.37 11.1C14.95 12.0733 14.3767 12.9233 13.65 13.65C12.9233 14.3767 12.0767 14.95 11.11 15.37C10.1433 15.79 9.10667 16 8 16ZM8 14.36C8.34667 13.88 8.64667 13.38 8.9 12.86C9.15333 12.34 9.36 11.7867 9.52 11.2H6.48C6.64 11.7867 6.84667 12.34 7.1 12.86C7.35333 13.38 7.65333 13.88 8 14.36ZM5.92 14.04C5.68 13.6 5.47 13.1433 5.29 12.67C5.11 12.1967 4.96 11.7067 4.84 11.2H2.48C2.86667 11.8667 3.35 12.4467 3.93 12.94C4.51 13.4333 5.17333 13.8 5.92 14.04ZM10.08 14.04C10.8267 13.8 11.49 13.4333 12.07 12.94C12.65 12.4467 13.1333 11.8667 13.52 11.2H11.16C11.04 11.7067 10.89 12.1967 10.71 12.67C10.53 13.1433 10.32 13.6 10.08 14.04ZM1.8 9.6H4.52C4.48 9.33333 4.45 9.07 4.43 8.81C4.41 8.55 4.4 8.28 4.4 8C4.4 7.72 4.41 7.45 4.43 7.19C4.45 6.93 4.48 6.66667 4.52 6.4H1.8C1.73333 6.66667 1.68333 6.93 1.65 7.19C1.61667 7.45 1.6 7.72 1.6 8C1.6 8.28 1.61667 8.55 1.65 8.81C1.68333 9.07 1.73333 9.33333 1.8 9.6ZM6.12 9.6H9.88C9.92 9.33333 9.95 9.07 9.97 8.81C9.99 8.55 10 8.28 10 8C10 7.72 9.99 7.45 9.97 7.19C9.95 6.93 9.92 6.66667 9.88 6.4H6.12C6.08 6.66667 6.05 6.93 6.03 7.19C6.01 7.45 6 7.72 6 8C6 8.28 6.01 8.55 6.03 8.81C6.05 9.07 6.08 9.33333 6.12 9.6ZM11.48 9.6H14.2C14.2667 9.33333 14.3167 9.07 14.35 8.81C14.3833 8.55 14.4 8.28 14.4 8C14.4 7.72 14.3833 7.45 14.35 7.19C14.3167 6.93 14.2667 6.66667 14.2 6.4H11.48C11.52 6.66667 11.55 6.93 11.57 7.19C11.59 7.45 11.6 7.72 11.6 8C11.6 8.28 11.59 8.55 11.57 8.81C11.55 9.07 11.52 9.33333 11.48 9.6ZM11.16 4.8H13.52C13.1333 4.13333 12.65 3.55333 12.07 3.06C11.49 2.56667 10.8267 2.2 10.08 1.96C10.32 2.4 10.53 2.85667 10.71 3.33C10.89 3.80333 11.04 4.29333 11.16 4.8ZM6.48 4.8H9.52C9.36 4.21333 9.15333 3.66 8.9 3.14C8.64667 2.62 8.34667 2.12 8 1.64C7.65333 2.12 7.35333 2.62 7.1 3.14C6.84667 3.66 6.64 4.21333 6.48 4.8ZM2.48 4.8H4.84C4.96 4.29333 5.11 3.80333 5.29 3.33C5.47 2.85667 5.68 2.4 5.92 1.96C5.17333 2.2 4.51 2.56667 3.93 3.06C3.35 3.55333 2.86667 4.13333 2.48 4.8Z",
  },
  {
    name: "записки сумасшедшей",
    tags: ["Библия", "равноправие"],
    href: "/mad-writings",
    path: "M8.5 16L7.34 14.8665C5.99333 13.5441 4.88 12.4033 4 11.4441C3.12 10.485 2.42 9.62398 1.9 8.86104C1.38 8.09809 1.01667 7.39691 0.81 6.75749C0.603333 6.11807 0.5 5.46412 0.5 4.79564C0.5 3.42961 0.92 2.28883 1.76 1.3733C2.6 0.457766 3.64667 0 4.9 0C5.59333 0 6.25333 0.159855 6.88 0.479564C7.50667 0.799273 8.04667 1.24977 8.5 1.83106C8.95333 1.24977 9.49333 0.799273 10.12 0.479564C10.7467 0.159855 11.4067 0 12.1 0C13.3533 0 14.4 0.457766 15.24 1.3733C16.08 2.28883 16.5 3.42961 16.5 4.79564C16.5 5.46412 16.3967 6.11807 16.19 6.75749C15.9833 7.39691 15.62 8.09809 15.1 8.86104C14.58 9.62398 13.88 10.485 13 11.4441C12.12 12.4033 11.0067 13.5441 9.66 14.8665L8.5 16ZM8.5 13.6458C9.78 12.396 10.8333 11.3243 11.66 10.4305C12.4867 9.53679 13.14 8.75931 13.62 8.09809C14.1 7.43688 14.4333 6.84832 14.62 6.33243C14.8067 5.81653 14.9 5.30427 14.9 4.79564C14.9 3.92371 14.6333 3.19709 14.1 2.6158C13.5667 2.03451 12.9 1.74387 12.1 1.74387C11.4733 1.74387 10.8933 1.93642 10.36 2.32153C9.82667 2.70663 9.46 3.19709 9.26 3.79292H7.74C7.54 3.19709 7.17333 2.70663 6.64 2.32153C6.10667 1.93642 5.52667 1.74387 4.9 1.74387C4.1 1.74387 3.43333 2.03451 2.9 2.6158C2.36667 3.19709 2.1 3.92371 2.1 4.79564C2.1 5.30427 2.19333 5.81653 2.38 6.33243C2.56667 6.84832 2.9 7.43688 3.38 8.09809C3.86 8.75931 4.51333 9.53679 5.34 10.4305C6.16667 11.3243 7.22 12.396 8.5 13.6458Z",
    viewBox: "0 0 17 16",
  },
];
export const links: Author[] = [
  {
    name: "all",
    title: "all posts",
    href: "/",
    path: "M2.5 16H5.5V10H11.5V16H14.5V7L8.5 2.5L 2.5 7V16ZM0.5 18V6L8.5 0L16.5 6V18H9.5V12H7.5V18H0.5Z",
    viewBox: "0 0 17 18",
  },
  ...AUTHORS,
];
export const lightD =
  "M16.0008 19.6333C17.0103 19.6333 17.8681 19.28 18.5742 18.5733C19.2802 17.8667 19.6332 17.0086 19.6332 15.9991C19.6332 14.9896 19.2799 14.1318 18.5732 13.4257C17.8666 12.7197 17.0085 12.3667 15.999 12.3667C14.9895 12.3667 14.1317 12.72 13.4256 13.4267C12.7196 14.1333 12.3666 14.9914 12.3666 16.0009C12.3666 17.0104 12.7199 17.8682 13.4266 18.5743C14.1332 19.2803 14.9913 19.6333 16.0008 19.6333ZM15.9999 22.6667C14.1555 22.6667 12.5832 22.0167 11.2832 20.7167C9.98324 19.4167 9.33324 17.8444 9.33324 16C9.33324 14.1556 9.98324 12.5833 11.2832 11.2833C12.5832 9.98333 14.1555 9.33333 15.9999 9.33333C17.8443 9.33333 19.4166 9.98333 20.7166 11.2833C22.0166 12.5833 22.6666 14.1556 22.6666 16C22.6666 17.8444 22.0166 19.4167 20.7166 20.7167C19.4166 22.0167 17.8443 22.6667 15.9999 22.6667ZM6.8499 17.5167H1.1499V14.4833H6.8499V17.5167ZM30.8499 17.5167H25.1499V14.4833H30.8499V17.5167ZM14.4832 6.85V1.15H17.5166V6.85H14.4832ZM14.4832 30.85V25.15H17.5166V30.85H14.4832ZM8.52527 10.6044L4.9115 7.11594L7.0586 4.87827L10.5296 8.45073L8.52527 10.6044ZM24.9412 27.1217L21.4369 23.5159L23.4666 21.4116L27.0883 24.8841L24.9412 27.1217ZM21.4115 8.53333L24.884 4.9116L27.1216 7.0587L23.5492 10.5297L21.4115 8.53333ZM4.87817 24.9413L8.48397 21.437L10.5883 23.4667L7.11584 27.0884L4.87817 24.9413Z";
export const darkD =
  "M16 28C12.6667 28 9.83333 26.8333 7.5 24.5C5.16667 22.1667 4 19.3333 4 16C4 12.6667 5.16667 9.83333 7.5 7.5C9.83333 5.16667 12.6667 4 16 4C16.3111 4 16.6167 4.01111 16.9167 4.03333C17.2167 4.05556 17.5111 4.08889 17.8 4.13333C16.8889 4.77778 16.1611 5.61667 15.6167 6.65C15.0722 7.68333 14.8 8.8 14.8 10C14.8 12 15.5 13.7 16.9 15.1C18.3 16.5 20 17.2 22 17.2C23.2222 17.2 24.3444 16.9278 25.3667 16.3833C26.3889 15.8389 27.2222 15.1111 27.8667 14.2C27.9111 14.4889 27.9444 14.7833 27.9667 15.0833C27.9889 15.3833 28 15.6889 28 16C28 19.3333 26.8333 22.1667 24.5 24.5C22.1667 26.8333 19.3333 28 16 28ZM16 25.3333C17.9556 25.3333 19.7111 24.7944 21.2667 23.7167C22.8222 22.6389 23.9556 21.2333 24.6667 19.5C24.2222 19.6111 23.7778 19.7 23.3333 19.7667C22.8889 19.8333 22.4444 19.8667 22 19.8667C19.2667 19.8667 16.9389 18.9056 15.0167 16.9833C13.0944 15.0611 12.1333 12.7333 12.1333 10C12.1333 9.55556 12.1667 9.11111 12.2333 8.66667C12.3 8.22222 12.3889 7.77778 12.5 7.33333C10.7667 8.04444 9.36111 9.17778 8.28333 10.7333C7.20556 12.2889 6.66667 14.0444 6.66667 16C6.66667 18.5778 7.57778 20.7778 9.4 22.6C11.2222 24.4222 13.4222 25.3333 16 25.3333Z";
