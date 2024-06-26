const lyricsEl = document.getElementById('lyrics')
const searchEl = document.getElementById('search')

const lyrics = `
어느새 빗물이 \n
내 발목에 고이고 \n
참았던 눈물이 \n
내 눈가에 고이고 I cry \n
텅 빈 방엔 시계소리 \n
지붕과 입 맞추는 비의 소리 \n
오랜만에 입은 코트 주머니 속에 반지 \n
손 틈새 스며드는 memory \n
며칠 만에 나서보는 밤의 서울 \n
고인 빗물은 작은 거울 \n
그 속에 난 비틀거리며 아프니까 \n
그대 없이 난 한 쪽 다리가 짧은 의자 \n
둘이서 쓰긴 작았던 우산 \n
차가운 세상에 섬 같았던 우산 \n
이젠 너무 크고 어색해 \n
그대 곁에 늘 젖어있던 왼쪽 어깨 (뭐해?) \n
기억의 무게에 고개 숙여보니 \n 
버려진 듯 풀어진 내 신발끈 \n
허나 곁엔 오직 비와 바람 \n
(없다) 잠시라도 우산을 들어줄 사람 \n
And I cry \n
어느새 빗물이 \n
내 발목에 고이고 \n
참았던 눈물이 \n
내 눈가에 고이고 I cry \n
그대는 내 머리 위의 우산 \n
어깨 위에 차가운 비 내리는 밤 \n
내 곁에 그대가 습관이 돼버린 나 \n
난 그대 없이는 안 돼요. Alone in the rain \n
Alone in the rain, rain, rain \n
Nothin' but pain, pain, pain \n
Girl, I just want you to know \n
Alone in the rain, rain, rain \n
Nothin' but pain, pain, pain \n
And I just can't let you go \n
하늘의 눈물이 고인 땅 \n
별을 감춘 구름에 보인 달 \n
골목길 홀로 외로운 구두 소리 \n
메아리에 돌아보며 가슴 졸인 맘 \n
나를 꼭 닮은 그림자 \n
서로가 서로를 볼 수 없었던 우리가 \n
이제야 둘인가? 대답을 그리다 \n
머릿속 그림과 대답을 흐린다 \n
내 눈엔 너무 컸던 우산 \n
날 울린 세상을 향해 접던 우산 \n
영원의 약속에 활짝 폈던 우산 \n
이제는 찢겨진 우산 아래 두 맘 \n
돌아봐도 이젠 없겠죠 \n
두 손은 주머니 속 깊게 넣겠죠 \n
이리저리 자유롭게 걸어도 \n
두 볼은 가랑비에도 쉽게 젖겠죠 \n
난 열어놨어, 내 마음의 문을 \n
그댄 내 머리 위의 우산 \n
그대의 그림자는 나의 그늘 \n
그댄 내 머리 위의 우산 \n
나의 곁에 \n
그대가 없기에 \n
나 창 밖에 우산을 들고 \n 
기다리던 그대, I cry \n
그대는 내 머리 위의 우산 \n
어깨 위에 차가운 비 내리는 밤 \n
내 곁에 그대가 습관이 돼버린 나 \n
난 그대 없이는 안 돼요. I need you back in my life \n
그대는 내 머리 위의 우산 \n
어깨 위에 차가운 비 내리는 밤 \n
내 곁에 그대가 없는 반쪽의 세상 \n
그대 나 없이는 안 돼요. Forever in the rain \n
버려진 우산 \n
버려진 우산 \n
I need you back \n
버려진 우산 \n
Without you \n
`


// 구현하기

const splitLyrics = lyrics.split(' ')


function inputHighlight(e){
    lyricsEl.innerHTML = ''
    // console.log(e.target.value)
    if(e.target.value !== ''){
        for(let n=0; n<splitLyrics.length; n++){
            const addLyrics = document.createElement('span')
            addLyrics.innerHTML = splitLyrics[n] + ' '
            if(splitLyrics[n].includes(e.target.value) || splitLyrics[n].toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                addLyrics.classList.add('highlight')
            }
            lyricsEl.appendChild(addLyrics)
        }
    }else{
        lyricsEl.innerHTML = lyrics
    }


}
lyricsEl.innerHTML = lyrics
searchEl.addEventListener('input', inputHighlight)