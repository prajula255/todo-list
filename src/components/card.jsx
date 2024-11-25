import React from "react";
function Card({ todo, onDone, onDelete }) {
    return (
        <>
            <div className="card w-full" >
                <div class="card-body">
                    <p class="card-text">{todo}</p>
                    {
                        onDone && <a href="#" class="btn btn-primary" onClick={onDone}><i class="fa-solid fa-check"></i></a>
                    }
                    <a href="#" class="ms-2 btn btn-primary" onClick={onDelete}><i class="fa-solid fa-trash"></i></a>

                </div>
            </div>
        </>
    );
}
export default Card;