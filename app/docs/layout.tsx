import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { docsSource } from "@/lib/source";
import { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Metadata } from "next";
import { SidebarItem } from "@/components/ui/sidebar-item";

export const metadata: Metadata = {
  title: "Documentation - Task Genius",
  description: "Documentation for Task Genius, a plugin for Obsidian.",
};

const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          viewBox="0 0 115 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_76_6_docs)">
            <path
              d="M59.5 10C86.8381 10 109 32.1619 109 59.5C109 86.8381 86.8381 109 59.5 109C32.1619 109 10 86.8381 10 59.5C10 32.1619 32.1619 10 59.5 10ZM81.0938 47.125C81.0695 47.1252 81.0412 47.1255 81.0098 47.126C80.9465 47.127 80.8689 47.1297 80.7773 47.1328C80.594 47.1391 80.3546 47.1503 80.0635 47.1709C79.4812 47.2121 78.689 47.2897 77.7217 47.4375C75.7887 47.7328 73.1413 48.309 70.0547 49.4316C64.0425 51.6185 56.4428 55.8547 49.29 63.9736L48.5996 64.7715C44.2973 69.8287 41.4169 76.316 39.6484 81.1748C39.5823 81.3564 39.5176 81.5374 39.4541 81.7158C38.9021 81.1675 38.3668 80.5833 37.8564 79.9688C35.763 77.448 34.5326 74.9838 34.1133 73.4521L34.04 73.1592L33.9639 72.8496C33.0935 69.6941 29.8909 67.7426 26.6592 68.46C23.4275 69.1775 21.3517 72.3009 21.8984 75.5283L21.96 75.8408L22.0469 76.2158C22.9971 80.0988 25.3757 84.3105 28.3359 87.875C31.4306 91.6014 35.682 95.2512 40.7471 97.2314L41.0654 97.3467C42.6672 97.874 44.4212 97.7253 45.917 96.9258C47.4124 96.1263 48.5085 94.7503 48.96 93.126L49.042 92.7979C49.0426 92.7958 49.0442 92.7934 49.0449 92.79C49.0484 92.7746 49.055 92.7458 49.0645 92.7051C49.0835 92.6231 49.1149 92.4908 49.1582 92.3145C49.2449 91.9613 49.3802 91.43 49.5654 90.7598C49.9372 89.4147 50.5047 87.5302 51.2773 85.4072C52.8693 81.0334 55.1449 76.1771 58.0254 72.791L58.5703 72.1611C64.2085 65.7593 69.9967 62.6201 74.2842 61.0605C76.5133 60.2498 78.3594 59.859 79.5908 59.6709C80.2057 59.577 80.6644 59.5339 80.9365 59.5146C81.0722 59.5051 81.1612 59.5013 81.1992 59.5H81.1621L81.1611 59.499C84.5761 59.4964 87.3436 56.728 87.3438 53.3125C87.3438 49.8952 84.5735 47.125 81.1562 47.125V52.9941C81.1561 47.125 81.1527 47.125 81.1494 47.125H81.0938ZM49.042 92.8008L49.043 92.7998V92.7988C49.043 92.7988 49.043 92.7981 49.042 92.7979C49.0417 92.7988 49.0421 92.8001 49.042 92.8008Z"
              fill="url(#paint0_linear_76_6_docs)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_76_6_docs"
              x="0"
              y="0"
              width="115"
              height="115"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-2" dy="-2" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_76_6"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_76_6"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_76_6_docs"
              x1="23"
              y1="60"
              x2="59.5"
              y2="109"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="var(--color-fd-primary)" />
              <stop
                offset="1"
                stopColor="var(--color-fd-primary)"
                stopOpacity="0.7"
              />
            </linearGradient>
          </defs>
        </svg>
        Task Genius
      </>
    ),
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={docsSource.pageTree}
      {...baseOptions}
      sidebar={{
        components: {
          Item: SidebarItem,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
