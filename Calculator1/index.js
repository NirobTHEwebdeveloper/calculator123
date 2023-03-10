*{
    box-sizing: border-box;
}
body{
    background: white;
    min-height: 101vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: mediumaquamarine;
}

.calculator{
    width: 300px;
    height: 500px;
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    background: #22252D;
    overflow: hidden;
}

form input{
    width: 100%;
    height: 150px;
    border-radius: 14px;
    font-size: 2rem;
    border: none;
    color: white;
    background: #000;
    padding: 1rem;
    text-align: right;
    pointer-events: none; /*Pointer evets makes screen unclickable*/

}
.Button{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}

button{
    flex: 0 0 22%;
    margin: 5px 0;
    border: 1px solid #000;
    width: 60px;
    height: 52px;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
}

.btn-yellow{
    background:rgb(245, 146, 62);
    color: white;
}

.btn-grey{
    background: rgb(224, 224,224);
    color: black;
}
.btn-equal{
    background: green;
}
.btn-clear{
    background-color: red;
}
