// 実装する動きのイメージ＆整理


// ➀
// 追加ボタンを押す → 未完了のTODOに入力した内容が作成
//                &→ 入力したテキストは削除



// ➁
// 未完了TODOの完了ボタンを押す → 内容が完了TODOに作成
//                            &→ 既存の未完了TODOの内容を削除



// ➂
// 未完了TODOの削除ボタンを押す → 既存の未完了TODOの内容を削除



// ➃
// 完了TODOの戻るボタンを押す → 内容が未完了TODOに作成
//                          &→ 既存の完了TODOの内容を削除








// 要素作成や階層構造構築の練習



    //引数の中のhtmlの要素を作成するcreateElement
//const li = document.createElement("li");
    //console.log(li);        //出力結果「<li></li>」

//const div = document.createElement("div");
    //console.log(div);       //出力結果「<div></div>」

//const ptag = document.createElement("p");
    //console.log(ptag);         //出力結果「<p></p>」



    //該当の要素の中に子要素を追加するappandChild
    //要素の中の文字を編集するiinerHTML
    // li.appendChild(div);
    // div.appendChild(ptag);
    // ptag.innerHTML = "aaa";
    //     console.log(li);
                                //出力結果 <li><div><p>aaa</p></div></li>






//➀


document.getElementById("add_button").addEventListener("click",() => onclickAdd());


const onclickAdd = () =>{

if(!document.getElementById("add_text").value == ""){      //"add_text"が空欄(value == "")じゃなかったら(!)、以下の処理を実行
    

    const inputText = document.getElementById("add_text").value;   //add_textに入力された値をinoutTextに獲得
        //console.log(inputText);
    document.getElementById("add_text").value = "";   //add_text内に空欄を代入(ボタンを押した後検索欄を空欄に戻すため)


        //タグの作成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const ptag = document.createElement("p");
    const completebutton = document.createElement("button");
    const deletebutton = document.createElement("button");

        //作成したタグにクラス付与及び、文字編集（追加）
    div.classList = "list_row";         //div.classList.add("list_row"); でもいける
    completebutton.innerHTML = "完了";
    deletebutton.innerHTML = "削除";

        //li,divタグに子要素を設定 pタグの中身を上で定めた変数で記述
    li.appendChild(div);
    div.appendChild(ptag);
    div.appendChild(completebutton);
    div.appendChild(deletebutton);
    ptag.innerHTML = inputText;


        //未完了のTODOに追加
    document.getElementById("incomplete_list").appendChild(li);







    //➁ ※2,4,5は2の動きの後に続いて発生する現象だから、2の記述の中に全て記す。
    completebutton.addEventListener("click",() => onclickcomplete());
    const onclickcomplete = () => {

        document.getElementById("incomplete_list").removeChild(li);
        document.getElementById("complete_list").appendChild(li);
        completebutton.remove();
        deletebutton.remove();

        const backbutton = document.createElement("button");
        const kandeletebutton = document.createElement("button");
        backbutton.innerHTML = "戻す"
        kandeletebutton.innerHTML = "完了消去" //勝手に追加
        div.appendChild(backbutton);
        div.appendChild(kandeletebutton);      //勝手に追加



        //➃
        backbutton.addEventListener("click",() => onclickback());
        const onclickback = () => {

            document.getElementById("complete_list").removeChild(li);
            document.getElementById("incomplete_list").appendChild(li);
            backbutton.remove();
            kandeletebutton.remove();

            div.appendChild(completebutton);
            div.appendChild(deletebutton);
        };



        //➄ 勝手に追加
        kandeletebutton.addEventListener("click",() => onclickkandelete());
        const onclickkandelete = () => {

            document.getElementById("complete_list").removeChild(li);
        };

        


    };



    //➂
    deletebutton.addEventListener("click",() => onclickdelete());
    const onclickdelete = () => {

        document.getElementById("incomplete_list").removeChild(li);
    };






};   //← ifのケツ


};












// 以下、エンターキーを押したときも反映されるように組んだもの

//これが成功した型

// document.getElementById("add_text").addEventListener('keydown', (e) => { 
//     if (e.key === 'Enter'){  
//         // 処理させたい中身
//     };
// });



//こっちはエンターが長押しできる状況でも、入力を1回にしてくれるやつ
// url : https://am-yu.net/2023/01/14/javascript_keydown_once/ 参照

// document.getElementById("add_text").addEventListener('keydown', (e) => { 
//     if (e.key === 'Enter' && !e.repeat){  
//         // 処理させたい中身
//     };
// });



document.getElementById("add_text").addEventListener('keydown', (e) => {            //この2行がEnterキーを押したら発火するやつ
    if (e.key === 'Enter' && !e.repeat){                                                                 // add_text は inputタグのID名
        return onclickAdd();
    };
});












// 下は一から全部クリエイトして初めて成功したやつ。そのあと上記のスッキリバージョンに成功した。



// document.getElementById("add_text").addEventListener('keydown', (e) => {            //この2行がEnterキーを押したら発火するやつ
//     if (e.key === 'Enter' && !e.repeat){                                                         // add_text は inputタグのID名

//         if(!(document.getElementById("add_text").value == "")){ 

// //➀
//             const inputText2 = document.getElementById("add_text").value;

//             document.getElementById("add_text").value = "";

//                     //タグの作成
//             const li2 = document.createElement("li");
//             const div2 = document.createElement("div");
//             const ptag2 = document.createElement("p");
//             const completebutton2 = document.createElement("button");
//             const deletebutton2 = document.createElement("button");

//                 //作成したタグにクラス付与及び、文字編集（追加）
//             div2.classList = "list_row";         //div.classList.add("list_row"); でもいける
//             completebutton2.innerHTML = "完了";
//             deletebutton2.innerHTML = "削除";

//                 //li,divタグに子要素を設定 pタグの中身を上で定めた変数で記述
//             li2.appendChild(div2);
//             div2.appendChild(ptag2);
//             div2.appendChild(completebutton2);
//             div2.appendChild(deletebutton2);
//             ptag2.innerHTML = inputText2;


//                 //未完了のTODOに追加
//             document.getElementById("incomplete_list").appendChild(li2);





//             //➁ ※2,4,5は2の動きの後に続いて発生する現象だから、2の記述の中に全て記す。
//             completebutton2.addEventListener("click",() => onclickcomplete2());
//             const onclickcomplete2 = () => {

//                 document.getElementById("incomplete_list").removeChild(li2);
//                 document.getElementById("complete_list").appendChild(li2);
//                 completebutton2.remove();
//                 deletebutton2.remove();

//                 const backbutton2 = document.createElement("button");
//                 const kandeletebutton2 = document.createElement("button");
//                 backbutton2.innerHTML = "戻る"
//                 kandeletebutton2.innerHTML = "完了消去" //勝手に追加
//                 div2.appendChild(backbutton2);
//                 div2.appendChild(kandeletebutton2);      //勝手に追加



//                 //➃
//                 backbutton2.addEventListener("click",() => onclickback2());
//                 const onclickback2 = () => {

//                     document.getElementById("complete_list").removeChild(li2);
//                     document.getElementById("incomplete_list").appendChild(li2);
//                     backbutton2.remove();
//                     kandeletebutton2.remove();

//                     div2.appendChild(completebutton2);
//                     div2.appendChild(deletebutton2);
//                 };



//                 //➄ 勝手に追加
//                 kandeletebutton2.addEventListener("click",() => onclickkandelete2());
//                 const onclickkandelete2 = () => {

//                     document.getElementById("complete_list").removeChild(li2);
//                 };

                


//             };



//             //➂
//             deletebutton2.addEventListener("click",() => onclickdelete2());
//             const onclickdelete2 = () => {

//                 document.getElementById("incomplete_list").removeChild(li2);
//             };



//         };
//     };            
// });











// 失敗
// document.getElementById("add_text").addEventListener('keydown', (e) => enterAdd());

// const enterAdd = () =>{

//     if (e.key === 'Enter') {
//         document.getElementById("add_text").value = ""; 
//     };
    
// };




//失敗
// document.getElementById("add_text").addEventListener('keydown', (e) => enterAdd());
    
//     const enterAdd = () =>{
//         if (e.key === 'Enter'){

        
//             const inputText2 = document.getElementById("add_text").value;

//                     //タグの作成
//             const li2 = document.createElement("li");
//             const div2 = document.createElement("div");
//             const ptag2 = document.createElement("p");
//             const completebutton2 = document.createElement("button");
//             const deletebutton2 = document.createElement("button");

//                 //作成したタグにクラス付与及び、文字編集（追加）
//             div2.classList = "list_row";         //div.classList.add("list_row"); でもいける
//             completebutton2.innerHTML = "完了";
//             deletebutton2.innerHTML = "削除";

//                 //li,divタグに子要素を設定 pタグの中身を上で定めた変数で記述
//             li2.appendChild(div2);
//             div2.appendChild(ptag2);
//             div2.appendChild(completebutton2);
//             div2.appendChild(deletebutton2);
//             ptag2.innerHTML = inputText2;


//                 //未完了のTODOに追加
//             document.getElementById("incomplete_list").appendChild(li2);






//             document.getElementById("add_text").value = ""; 
//         }
//     }
    
    
    
    
