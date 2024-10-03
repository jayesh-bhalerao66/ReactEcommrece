import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Modal(props) {
    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="congrat">
                                <p style={{ textAlign: "center", color: "#0c870c" }}><CheckCircleIcon /></p>
                                <p>Congratulations..</p>
                                <p>{props.greetings}</p>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Thankyou</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
