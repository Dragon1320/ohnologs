<script lang="ts">
  import "carbon-components-svelte/css/white.css";
  import "../app.css";

  import { Content, Header, HeaderNav, HeaderNavItem, HeaderNavMenu, SkipToContent } from "carbon-components-svelte";
</script>

<Header company="Ohnologs" platformName="Database">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/table/blast" text="BLAST" />
    <HeaderNavItem href="/table/gene" text="Gene" />
    <HeaderNavItem href="/table/genome" text="Genome" />
    <HeaderNavItem href="/table/select" text="Select" />
    <HeaderNavItem href="/circos" text="Circos" />
    <HeaderNavItem href="/dotplot" text="Dotplot" />
    <HeaderNavItem href="/synteny" text="Synteny" />
    <HeaderNavItem href="/tree" text="Tree" />
    <!-- <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/" text="Link 1" />
      <HeaderNavItem href="/" text="Link 2" />
      <HeaderNavItem href="/" text="Link 3" />
    </HeaderNavMenu> -->
  </HeaderNav>
</Header>

<Content>
  <slot />
</Content>
