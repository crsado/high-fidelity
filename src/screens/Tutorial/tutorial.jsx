import React, {useEffect} from "react";
import screenshot202503041749302 from "../../assets/screenshot-2025-03-04-174930-1.png";
import "./style.css";
import "./styleguide.css"
import {createRoot} from "react-dom/client";
import {Link} from "react-router-dom";

let root

export const TutorialPage = () => {
    useEffect(() => {
        root = createRoot(document.getElementById("overlayRoot"))
    });
    return (
        <>

            <div className="tutorial-page">
                <div className="div">
                    <div id="overlayRoot"/>
                    <div className="text-wrapper">TUTORIALS</div>

                    <div className="menu">
                        <div className="menu-list">
                            <div className="menu-list-item">
                                <div className="state-layer">
                                    <div className="leading-element"/>

                                    <div className="content">
                                        <div className="label-text" onClick={renderEditorTutorial}>Photo Editor</div>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-list-item">
                                <div className="state-layer">
                                    <div className="leading-element-2"/>

                                    <div className="content">
                                        <div className="label-text">AI Image Generator</div>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-list-item">
                                <div className="state-layer">
                                    <div className="leading-element-3"/>

                                    <div className="content">
                                        <div className="label-text">Other</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rectangle">
                    <Link to="/">
                        <img
                            className="screenshot"
                            alt="Screenshot"
                            src={screenshot202503041749302}
                        />
                    </Link>
                </div>
            </div>

        </>
    );
};

const EditorTutorial = () => {
    return (
        <>
            <div className="darken"/>
            <div className="box">
                <h1>Photo Editor</h1>
                <hr/>

                <h2>Getting Started</h2>
                <ol>
                    <li><strong>Upload an Image</strong>: Click on "Open Image" to select a photo from your device or
                        use a URL.
                    </li>
                </ol>

                <hr/>

                <h2>Basic Editing Tools</h2>
                <h3>1. Crop & Resize</h3>
                <ul>
                    <li>Use the Crop tool to trim unwanted parts of your image.</li>
                    <li>Resize images while maintaining aspect ratio.</li>
                </ul>

                <h3>2. Adjustments</h3>
                <ul>
                    <li>Modify <strong>brightness, contrast, hue, and saturation</strong> to enhance the image.</li>
                    <li>Use <strong>Auto Fix</strong> for quick optimization.</li>
                </ul>

                <h3>3. Filters & Effects</h3>
                <ul>
                    <li>Apply built-in filters like <strong>Vintage, Sepia, or Blur</strong>.</li>
                    <li>Use overlays for artistic effects.</li>
                </ul>

                <h3>4. Retouching Tools</h3>
                <ul>
                    <li><strong>Heal Tool</strong>: Remove blemishes and spots.</li>
                    <li><strong>Clone Tool</strong>: Duplicate or remove specific areas.</li>
                    <li><strong>Dodge & Burn</strong>: Lighten or darken areas selectively.</li>
                </ul>

                <h3>5. Text & Layers</h3>
                <ul>
                    <li>Add text with customizable fonts and colors.</li>
                    <li>Work with multiple layers to create complex compositions.</li>
                </ul>

                <hr/>

                <h2>Advanced Features</h2>
                <h3>1. Selection Tools</h3>
                <ul>
                    <li><strong>Lasso & Magic Wand</strong>: Select specific areas for precise editing.</li>
                    <li><strong>Masking</strong>: Apply effects only to selected areas.</li>
                </ul>

                <h3>2. Brushes & Drawing Tools</h3>
                <ul>
                    <li>Use custom brushes for artistic touch-ups.</li>
                    <li>Adjust opacity and hardness for detailed work.</li>
                </ul>

                <h3>3. Blending & Layer Styles</h3>
                <ul>
                    <li>Experiment with blend modes like <strong>Multiply, Screen, and Overlay</strong>.</li>
                    <li>Add <strong>drop shadows, glows, and transparency</strong> effects.</li>
                </ul>

                <hr/>

                <h2>Saving & Exporting</h2>
                <ol>
                    <li><strong>File Formats</strong>:
                        <ul>
                            <li><strong>PNG</strong> (Supports transparency)</li>
                            <li><strong>JPEG</strong> (Best for web and sharing)</li>
                            <li><strong>PSD</strong> (For advanced editing and layer retention)</li>
                        </ul>
                    </li>
                    <li><strong>Optimize for Web</strong>: Adjust quality settings to balance size and clarity.</li>
                    <li><strong>Save to Cloud</strong>: Use Pixlr’s cloud storage for easy access.</li>
                </ol>

                <hr/>

                <h2>Final Tips</h2>
                <ul>
                    <li>Use keyboard shortcuts to speed up editing.</li>
                    <li>Experiment with layers to create stunning effects.</li>
                    <li>Regularly save your work to prevent data loss.</li>
                </ul>

                <hr/>

                <p>Now that you’ve explored the basics, start editing your photos with Pixlr and unleash your
                    creativity!</p>
            </div>
        </>
    )
}

function renderEditorTutorial() {
    root.render(<EditorTutorial/>)
}
