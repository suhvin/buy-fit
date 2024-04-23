"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useLogger } from "./core";
import { createFeature, createPage } from "./type";

interface LoggerContainerProps {}

const LoggerContainer = ({}: LoggerContainerProps) => {
  let pathname = usePathname();
  switch (pathname) {
    case "/":
      pathname = "/jp/p1/home";
      break;
    case "/kr":
      pathname = "/kr/p1/home";
      break;
    case "/kr/p1":
      pathname = "/kr/p1/home";
      break;
    case "/jp":
      pathname = "/jp/p1/home";
      break;
    case "/jp/p1":
      pathname = "/jp/p1/home";
      break;
    default:
      break;
  }

  const { track } = useLogger();

  // useEffect(() => {
  //   console.log("pathname", pathname);
  //   const pathList: string[] = pathname.slice(1).split("/");
  //   console.log("pathList", pathList);
  // }, [pathname]);

  useEffect(() => {
    const pathList: string[] = pathname.slice(1).split("/");
    track(
      [createFeature(pathList[0], pathList[1]), createPage(pathList), "page"],
      [createFeature(pathList[0], pathList[1]), createPage(pathList), "default", createPage(pathList)],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <></>;
};

export default LoggerContainer;
