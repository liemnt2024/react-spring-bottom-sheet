/**
 * Welcome to @reach/portal!
 *
 * Creates and appends a DOM node to the end of `document.body` and renders a
 * React tree into it. Useful for rendering a natural React element hierarchy
 * with a different DOM hierarchy to prevent parent styles from clipping or
 * hiding content (for popovers, dropdowns, and modals).
 *
 * @see Docs   https://reach.tech/portal
 * @see Source https://github.com/reach/reach-ui/tree/main/packages/portal
 * @see React  https://reactjs.org/docs/portals.html
 */
import * as React from "react";
declare const Portal: React.FC<PortalProps>;
/**
 * @see Docs https://reach.tech/portal#portal-props
 */
declare type PortalProps = {
    /**
     * Regular React children.
     *
     * @see Docs https://reach.tech/portal#portal-children
     */
    children: React.ReactNode;
    /**
     * The DOM element type to render.
     *
     * @see Docs https://reach.tech/portal#portal-type
     */
    type?: string;
    /**
     * The container ref to which the portal will be appended. If not set the
     * portal will be appended to the body of the component's owner document
     * (typically this is the `document.body`).
     *
     * @see Docs https://reach.tech/portal#portal-containerRef
     */
    containerRef?: React.RefObject<Node>;
    unstable_skipInitialRender?: boolean;
};
export type { PortalProps };
export { Portal };
