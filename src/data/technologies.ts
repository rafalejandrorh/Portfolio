import HTMLIcon from "../components/icons/HTML.astro";
import JavascriptIcon from "../components/icons/Javascript.astro";
import CSSIcon from "../components/icons/CSS.astro";
import LaravelIcon from '../components/icons/Laravel.astro';
import BootstrapIcon from '../components/icons/Bootstrap.astro';
import JQueryIcon from '../components/icons/JQuery.astro';
import PostgresIcon from '../components/icons/Postgres.astro';
import PHPIcon from '../components/icons/PHP.astro';
import MySQLIcon from '../components/icons/MySQL.astro';
import GitLabIcon from '../components/icons/GitLab.astro';
import DockerIcon from '../components/icons/Docker.astro';
import GitIcon from '../components/icons/Git.astro';
import NodeJsIcon from '../components/icons/NodeJs.astro';

const TAGS = {
    HTML: {
        name: "HTML",
        class: "bg-white text-black",
        icon: HTMLIcon
    },
    Javascript: {
        name: "Javascript",
        class: "bg-black text-yellow",
        icon: JavascriptIcon
    },
    CSS: {
        name: "CSS",
        class: "bg-white text-blue",
        icon: CSSIcon
    },
    Laravel: {
        name: "Laravel",
        class: "bg-white text-blue",
        icon: LaravelIcon
    },
    Bootstrap: {
        name: "Bootstrap",
        class: "bg-white text-blue",
        icon: BootstrapIcon
    },
    JQuery: {
        name: "JQuery",
        class: "bg-white text-blue",
        icon: JQueryIcon
    },
    PostgreSQL: {
        name: "PostgreSQL",
        class: "bg-white text-blue",
        icon: PostgresIcon
    },
    PHP: {
        name: "PHP",
        class: "bg-white text-blue",
        icon: PHPIcon
    },
    MySQL: {
        name: "MySQL",
        class: "bg-white text-blue",
        icon: MySQLIcon
    },
    GitLab: {
        name: "GitLab",
        class: "bg-white text-blue",
        icon: GitLabIcon
    },
    Docker: {
        name: "Docker",
        class: "bg-white text-blue",
        icon: DockerIcon
    },
    Git: {
        name: "Git",
        class: "bg-white text-blue",
        icon: GitIcon
    },
    NodeJs: {
        name: "Node.js",
        class: "bg-white text-blue",
        icon: NodeJsIcon
    }
}

export default TAGS;