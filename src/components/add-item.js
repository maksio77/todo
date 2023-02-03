

const AddItem = () => {
    return (
        <div>
            <div className="form">
                    <div className="form__checkbox">
                        <input class="styled-checkbox" id="add-checkbox" type="checkbox" value="value1" />
                        <label for="add-checkbox" />
                    </div>
                    <div class="form__fields">
                        <input type="text" placeholder="Назва" className="input-title" />
                        <input type="text" placeholder="Введіть текст..." className="input-text" />
                    </div>
                    <svg height="32px" viewBox="0 0 512 512" width="32px">
                        <g>
                            <g>
                                <g>
                                    <path d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7     c-105.1,0-190.7-85.5-190.7-190.7S150.9,65.3,256,65.3S446.7,150.9,446.7,256S361.1,446.7,256,446.7z" />
                                </g>
                            </g>
                        <g>
                            <polygon points="264.1,128 247.3,128 247.3,247.9 128,247.9 128,264.7 247.3,264.7 247.3,384 264.1,384 264.1,264.7 384,264.7     384,247.9 264.1,247.9   " />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default AddItem;