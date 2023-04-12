import { useState } from "react";
import dayjs from "dayjs";
import {
    CalendarActions,
    CalendarBody,
    CalendarContainer,
    CalendarDay,
    CalendarHeader,
    CalendarTitle,
} from "./styles";
import { getWeekDays } from "../../utils/get-week-days";
import { CaretLeft, CaretRight } from "phosphor-react";

export function Calendar() {
    const [currentDate, setCurrentDate] = useState(() => {
        return dayjs().set("date", 1);
    });

    const currentMonth = currentDate.format("MMMM");
    const currentYear = currentDate.format("YYYY");
    const shortWeekDays = getWeekDays({ short: true });

    function handlePreviousMonth() {
        const previousMonthDate = currentDate.subtract(1, "month");

        setCurrentDate(previousMonthDate);
    }

    function handleNextMonth() {
        const previousMonthDate = currentDate.add(1, "month");

        setCurrentDate(previousMonthDate);
    }

    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarTitle>
                    {currentMonth} <span>{currentYear}</span>
                </CalendarTitle>

                <CalendarActions>
                    <button onClick={handlePreviousMonth} title="Previous month">
                        <CaretLeft />
                    </button>

                    <button onClick={handleNextMonth} title="Next month">
                        <CaretRight />
                    </button>
                </CalendarActions>
            </CalendarHeader>

            <CalendarBody>
                <thead>
                    <tr>
                        {shortWeekDays.map(weekDay => (
                            <th key={weekDay}>{weekDay}.</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <CalendarDay>1</CalendarDay>
                        </td>
                        <td>
                            <CalendarDay>2</CalendarDay>
                        </td>
                        <td>
                            <CalendarDay disabled>3</CalendarDay>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <CalendarDay>1</CalendarDay>
                        </td>
                        <td>
                            <CalendarDay disabled>2</CalendarDay>
                        </td>
                        <td>
                            <CalendarDay>3</CalendarDay>
                        </td>
                    </tr>
                </tbody>
            </CalendarBody>
        </CalendarContainer>
    );
}
