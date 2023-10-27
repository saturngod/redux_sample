import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { changeLang } from "../state/language/languageSlice";

export const LanguageSwitch = () => {
    const lang = useSelector((state: RootState) => state.language.value);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div>
            Current Lang: {lang}
            <button onClick={() => dispatch(changeLang("en"))}>English</button>
            <button onClick={() => dispatch(changeLang("my"))}>Myanmar</button>
        </div>
    )
}