import React from "react";

export interface formProps {
    children: React.ReactNode;
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void
}