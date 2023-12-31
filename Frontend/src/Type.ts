import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Redux/store";
import { ReactElement } from "react";
export interface initialParams {
  pathname: string;
  Loading: boolean;
}
export interface linksMap {
  icon: ReactElement;
  value: string;
  path: string;
}
export interface initialDay {
  days: dayMap[];
}
export interface initialPattern {
  patterns: dayMap[];
}
export interface dayMap {
  _id: number;
  tascName: string;
  dayName: string;
  events: eventType[];
  monthAndYears: string;
  category: categType[];
  color: string;
  note: string;
  pattern: string;
  owner: string;
}
export interface categType {
  id: number;
  categ: string;
}
export interface eventType {
  id: number;
  act: string;
  timeAct: string;
  isComleted: boolean;
  length: number;
}

export interface initialEvent {
  events: eventType[];
}
export interface copydayMap {
  copytascName: string;
  copydayName: string;
  copyevents: eventType[];
  copymonthAndYears: string;
  copycategory: categType[];
  copycolor: string;
  copynote: string;
  copypattern: string;
}
export interface filterType {
  selectMonthAndYear: number;
  searchValue: string;
}
export interface purpMap {
  _id: number;
  title: string;
  desc: string;
  value: string;
  isCompleted: boolean;
  owner: string;
}
export interface initialPurp {
  purps: purpMap[];
}
export interface iconMap {
  icon: ReactElement;
  path: string;
}
export interface userType {
  isAuth: boolean;
  userEmail: string;
  userPasswordHash: string;
  userAvatar: string;
}
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
