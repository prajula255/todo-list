import React from "react";
function Card({ todo, onDone, onDelete }) {
    return (
        <>
            <div className="card w-full" >
                <div class="card-body">
                    <p class="card-text">{todo}</p>
                    <a href="#" class="btn btn-primary" onClick={onDone}>done</a>
                    <a href="#" class="ms-2 btn btn-primary" onClick={onDelete}>delete</a>

                </div>
            </div>
        </>
    );
}
export default Card;