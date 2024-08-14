const projectId = '1054451382';  // 自分のプロジェクトIDに置き換えてください
const apiUrl = `https://corsproxy.io/?https://api.scratch.mit.edu/projects/${projectId}`;

async function fetchProjectStatus() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('APIリクエストが失敗しました');
        }

        const data = await response.json();

        document.getElementById('project-title').innerText = data.title;
        document.getElementById('views').innerText = data.stats.views;
        document.getElementById('favorites').innerText = data.stats.favorites;
        document.getElementById('remixes').innerText = data.stats.remixes;
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
}

window.onload = fetchProjectStatus;
