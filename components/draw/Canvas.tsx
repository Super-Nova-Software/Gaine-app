import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { DrawType } from '@/graphql/gql/graphql';


function Canvas({channelId,draw}:{channelId:string,draw:DrawType}) {
  
    const [whiteBoardData,setWhiteBoardData]=useState<any>();
    
    // const updateWhiteboard=useMutation(api.files.updateWhiteboard)
    // useEffect(()=>{
    //     onSaveTrigger&&saveWhiteboard();
    // },[onSaveTrigger])
    // const saveWhiteboard=()=>{
    //     updateWhiteboard({
    //         _id:fileId,
    //         whiteboard:JSON.stringify(whiteBoardData)
    //     }).then(resp=>console.log(resp))
    // }

    return (
    <div style={{ height: "670px" }}>
   {draw&& <Excalidraw 
    theme='dark'
    initialData={{
        elements:draw?.whiteboard&&JSON.parse(draw?.whiteboard)
    }}
    onChange={(excalidrawElements, appState, files)=>
        setWhiteBoardData(excalidrawElements)}
    UIOptions={{
        canvasActions:{
            saveToActiveFile:false,
            loadScene:false,
            export:false,
            toggleTheme:false

        }
    }}
    >
        <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas/>
            <MainMenu.DefaultItems.SaveAsImage/>
            <MainMenu.DefaultItems.ChangeCanvasBackground/>
        </MainMenu>
        <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint/>
            <WelcomeScreen.Hints.MenuHint/>
            <WelcomeScreen.Hints.ToolbarHint/>
            <WelcomeScreen.Center>
                <WelcomeScreen.Center.MenuItemHelp/>
            </WelcomeScreen.Center>
        </WelcomeScreen>
        </Excalidraw>}
  </div>
  )
}

export default Canvas