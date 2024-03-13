import { PropsWithChildren } from "react";

export default function MainBody({children}: PropsWithChildren) {
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 dark:bg-blue-very-dark-bg -z-50" />
      <div className="mt-2 bg-gray-light dark:bg-blue-very-dark-bg text-blue-very-dark-text dark:text-white w-full px-14 py-10">{children}</div>
    </>
  )
}