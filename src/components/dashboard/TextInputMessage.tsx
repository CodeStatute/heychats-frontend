import React, { useEffect, useRef, useState } from "react";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { InputProps } from "#/types";

interface CustomInputProps extends InputProps {
  handleImageSend: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageInput: React.RefObject<HTMLInputElement> | null;
  handleEmojiToggle: () => void;
}

const TextInputMessage = ({
  inputId,
  handleImageSend,
  messageInput,
  handleEmojiToggle,
  ...rest
}: CustomInputProps): JSX.Element => {
  return (
    <div className="flex flex-col gap-2 relative rounded-lg">
      <div className="relative">
        <input
          id={inputId}
          className="h-[40px] rounded-[6px] bg-input-message placeholder:text-input-message-placeholder text-input-message-content outline-0 px-2 border-2 border-input-message-focus w-full pr-[5rem]"
          ref={messageInput}
          {...rest}
        />

        <div className="absolute top-0 right-0 h-full flex items-center justify-center gap-2 pr-2">
          <InsertEmoticonOutlinedIcon
            className="text-primary"
            onClick={handleEmojiToggle}
          />
          <label htmlFor="send-images">
            <ImageOutlinedIcon className="text-primary" />
          </label>
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        multiple
        id="send-images"
        hidden
        onChange={handleImageSend}
      />
    </div>
  );
};

export default TextInputMessage;
