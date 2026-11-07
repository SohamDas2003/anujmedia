"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { musicCatalog, SongEntity } from "@/lib/songsData";

export default function SongsCatalog() {
  const [selectedEntity, setSelectedEntity] = useState<SongEntity | null>(null);

  return (
    <>
      {/* Logos Showcase Grid (Bigger Logos, Smaller & Compact Cards) */}
      <div className="music-compact-grid">
        {musicCatalog.map((entity) => (
          <div
            key={entity.id}
            className="compact-music-card reveal"
            onClick={() => setSelectedEntity(entity)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedEntity(entity);
              }
            }}
            aria-label={`View details for ${entity.name}`}
            style={{
              ["--card-accent" as string]: entity.accentColor || "var(--signal)",
            }}
          >
            {/* Prominent Large Logo Frame */}
            <div className="compact-logo-stage">
              <Image
                src={entity.logo}
                alt={`${entity.name} logo`}
                width={360}
                height={360}
                className="compact-logo-img"
                priority
              />
              <span className="compact-category-tag">{entity.category}</span>
              <div className="compact-hover-sheen">
                <span>View Full Details &rarr;</span>
              </div>
            </div>

            {/* Smaller Compact Card Body */}
            <div className="compact-info-pane">
              <div className="compact-header-row">
                <span className="compact-est">Est. {entity.established}</span>
                <span className="compact-stream-counter">{entity.stats.streams}</span>
              </div>

              <h3 className="compact-entity-title">{entity.name}</h3>
              <p className="compact-tagline-text">{entity.tagline}</p>

              <div className="compact-hit-line">
                <span className="hit-badge">Top Hit</span>
                <span className="hit-song">{entity.featuredSong.title}</span>
              </div>

              <div className="compact-genres-row">
                {entity.genre.slice(0, 2).map((g) => (
                  <span key={g} className="compact-genre-pill">
                    {g}
                  </span>
                ))}
              </div>

              <div className="compact-card-footer">
                <span className="compact-details-link">
                  Inspect Dossier &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal Dossier (Without Preview Music Player) */}
      {selectedEntity && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedEntity(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderTop: `6px solid ${selectedEntity.accentColor || "var(--signal)"}`,
            }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedEntity(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="modal-hero">
              <div className="modal-logo-wrapper">
                <Image
                  src={selectedEntity.logo}
                  alt={selectedEntity.name}
                  width={220}
                  height={220}
                  className="modal-logo-img"
                />
              </div>
              <div className="modal-title-info">
                <div className="music-badges-row">
                  <span className="entity-badge">{selectedEntity.category}</span>
                  <span className="year-badge">Est. {selectedEntity.established}</span>
                </div>
                <h2>{selectedEntity.name}</h2>
                <p className="modal-tagline">{selectedEntity.tagline}</p>
                <div className="modal-genres">
                  {selectedEntity.genre.map((g) => (
                    <span key={g} className="genre-chip">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-stats-grid">
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.streams}</span>
                  <span className="modal-stat-lbl">Global Streams</span>
                </div>
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.releases}</span>
                  <span className="modal-stat-lbl">Released Discography</span>
                </div>
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.chartPeak}</span>
                  <span className="modal-stat-lbl">Peak Charting</span>
                </div>
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.listeners}</span>
                  <span className="modal-stat-lbl">Active Listeners</span>
                </div>
              </div>

              <div className="modal-section">
                <h4>About The Brand &amp; Artistic Direction</h4>
                <p className="modal-desc">{selectedEntity.description}</p>
              </div>

              <div className="modal-section">
                <h4>Flagship Release</h4>
                <div className="modal-track-card">
                  <div className="modal-track-info">
                    <span className="track-badge">{selectedEntity.featuredSong.badge}</span>
                    <h5 className="modal-track-title">{selectedEntity.featuredSong.title}</h5>
                    <p className="modal-track-artist">
                      Artist: {selectedEntity.featuredSong.artist} &bull; Released: {selectedEntity.featuredSong.year} &bull; Streams: {selectedEntity.featuredSong.streams}
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h4>Popular Hits &amp; Catalog</h4>
                <div className="modal-track-grid">
                  {selectedEntity.topTracks.map((track, idx) => (
                    <div key={track} className="modal-track-row">
                      <span className="modal-track-idx">0{idx + 1}</span>
                      <span className="modal-track-name">{track}</span>
                      <span className="modal-track-hit">Official Release</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Worldwide Streaming &amp; Distribution Outlets</h4>
                <div className="modal-dist-pills">
                  {selectedEntity.distribution.map((d) => (
                    <span key={d} className="modal-dist-pill">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-cta-box">
                <div>
                  <h5>Want to partner with {selectedEntity.name}?</h5>
                  <p>Inquire for music rights licensing, co-productions, or artist booking.</p>
                </div>
                <Link
                  href={`/contact?service=Music%20Marketing&brand=${encodeURIComponent(
                    selectedEntity.name
                  )}`}
                  className="btn btn-signal"
                  onClick={() => setSelectedEntity(null)}
                >
                  Contact Management &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
