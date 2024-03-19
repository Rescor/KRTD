import { initReactI18next } from "react-i18next";
import i18n from "i18next";

function setLanguage() {
    let language = localStorage.getItem('language');

    if (!language) {
        const userLang = window.navigator.language.substring(0, 2);
        language = userLang;
        localStorage.setItem("language", userLang);
    }

    if (language !== "en" && language !== "ru" && language !== "be") {
        language = "en";
        localStorage.setItem("language", "en");
    }

    return language;
}

i18n.use(initReactI18next).init({
    resources: {
        be: {
            translation: {
                nav: {
                    "main": "Галоӯная",
                    "about": "Пра мяне",
                    "blog": "Блог",
                    "gaming_hub": "Гульнявы хаб",
                    "radio_tower": "Радыёвышка",
                    "cloud": "Воблака",
                    "other": "Іншае",
                    "world": "Свет",
                },
                about: {
                    "title": "Вiтаю!",
                    "i_am": "Мяне клічуць Rescor. Гэта мой асабісты сайт.",
                    "below": "Ніжэй - распавядаю ў некалькіх словах пра сябе.",
                    "hobbies": "Я займаюся праграмаваннем, нэтсталкiнгам, калекцыянаваннем старых смартфонаў, мікракантролерамі і таму падобнымі рэчамі.",
                    "create": "Я стварыў",
                    "and": "і",
                    "also_hosting": "А яшчэ я хошчу шмат усялякіх цікавых і вясёлых штук.",
                    "tg_blogs": "У тэлеграме вяду",
                    "personal_blog": "асабісты блог",
                    "tulpa_blog": "тульпаблог",
                    "netstalking_channel": "канал пра нэтсталкінг",
                    "member": "Член",
                    "also_like": "Я люблю падарожнічаць, граю на саксафоне, гітары і фартэпіяна, вучуся маляваць.",
                    "fan": "Фанат",
                    "worm": "Чарвяка",
                    "fan_things": "Playstation 3 / PS Vita і піцы. =)",
                    "acquainted": "Будзем знаёмы!"
                },
                "new_post": "Новы пост",
                "blog_acp": "ACP (Блог)",
                "cloud": "Воблака",
            }
        },
        ru: {
            translation: {
                nav: {
                    "main": "Главная",
                    "about": "Обо мне",
                    "blog": "Блог",
                    "gaming_hub": "Игровой хаб",
                    "radio_tower": "Радиовышка",
                    "cloud": "Облако",
                    "other": "Прочее",
                    "world": "Мир",
                },
                about: {
                    "title": "Привет!",
                    "i_am": "Меня зовут Rescor. Это мой домашний сайт.",
                    "below": "Ниже - в нескольких словах рассказываю о себе.",
                    "hobbies": "Я занимаюсь программированием, нетсталкингом, коллекционированием старых смартфонов, микроконтроллерами и тому подобными вещами.",
                    "create": "Я создал",
                    "and": "и",
                    "also_hosting": "А ещё я хощу много всяких интересных и весёлых штук.",
                    "tg_blogs": "В телеграме веду",
                    "personal_blog": "личный блог",
                    "tulpa_blog": "тульпоблог",
                    "netstalking_channel": "канал о нетсталкинге",
                    "member": "Член",
                    "also_like": "Я люблю путешествовать, играю на саксафоне, гитаре и фортепиано, учусь рисовать.",
                    "fan": "Фанат",
                    "worm": "Червя",
                    "fan_things": "Playstation 3 / PS Vita и пиццы. =)",
                    "acquainted": "Будем знакомы!"
                },
                "new_post": "Новый пост",
                "blog_acp": "ACP (Блог)",
                "cloud": "Облако",
            }
        },
        en: {
            translation: {
                nav: {
                    "main": "Main",
                    "about": "About me",
                    "blog": "Blog",
                    "gaming_hub": "Gaming Hub",
                    "radio_tower": "Radio Tower",
                    "cloud": "Cloud",
                    "other": "Other",
                    "world": "World",
                },
                about: {
                    "title": "Hi!",
                    "i_am": "I am Rescor. And this is my personal website.",
                    "below": "Below, I tell about myself in a few words.",
                    "hobbies": "I do programming, Internet research (netstalking), collecting old smartphones, microcontrollers and similar things.",
                    "create": "I created",
                    "and": "and",
                    "also_hosting": "And I also hosting a lot of interesting and funny things.",
                    "tg_blogs": "In the Telegram I have",
                    "personal_blog": "personal blog",
                    "tulpa_blog": "tulpa blog",
                    "netstalking_channel": "channel about netstalking",
                    "member": "Member of",
                    "also_like": "I love to travel, play saxophone, guitar and piano, and learn to draw.",
                    "fan": "A big fan of",
                    "worm": "Worm",
                    "fan_things": "Playstation 3 / PS Vita and pizza. =)",
                    "acquainted": "Welcome!"
                },
                "new_post": "New Post",
                "blog_acp": "ACP (Blog)",
                "cloud": "Cloud",
            }
        }
    },
    lng: setLanguage(),
    interpolation: { escapeValue: false },
});

export default i18n;